import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root' 
})
export class ProductService {

  productList:IProduct[];
  constructor() {
    this.productList=[
      {"ID":1 , "Name":"Redmi" , "Quantity":5 , "Price":10000, "Img":"https://fakeimg.pl/250x100/" , "CateogryID":1},
      {"ID":2 , "Name":"Iphone" , "Quantity":2 , "Price":30000 , "Img":"https://fakeimg.pl/250x100/" , "CateogryID":1},
      {"ID":3 , "Name":"Oppo" , "Quantity":2 , "Price":7000 , "Img":"https://fakeimg.pl/250x100/" , "CateogryID":1},
      {"ID":10 , "Name":"Lenovo" , "Quantity":3 , "Price":11000 , "Img":"https://fakeimg.pl/250x100/" , "CateogryID":2},
      {"ID":20 , "Name":"HP" , "Quantity":7 , "Price":12000 , "Img":"https://fakeimg.pl/250x100/" , "CateogryID":2},
      {"ID":30 , "Name":"Dell" , "Quantity":1 , "Price":15000 , "Img":"https://fakeimg.pl/250x100/" , "CateogryID":2},
      {"ID":100 , "Name":"Lg" , "Quantity":0 , "Price":5000 , "Img":"https://fakeimg.pl/250x100/" , "CateogryID":3},
      {"ID":200 , "Name":"Samsung" , "Quantity":3 , "Price":7000 , "Img":"https://fakeimg.pl/250x100/" , "CateogryID":3},
      {"ID":300 , "Name":"Toshiba" , "Quantity":2 , "Price":9000 , "Img":"https://fakeimg.pl/250x100/" , "CateogryID":3}
    ]
  }

  getAllProducts():IProduct[]{
    return this.productList;
  }

  getProductByCateogryID(CateogryID:number):IProduct[]{
    if(CateogryID == 0){
      return this.getAllProducts();
    }
    else
    {
      return this.productList.filter(item=>item.CateogryID == CateogryID);
    }
  }

  getProductByID(productID:number):IProduct|undefined{
    return this.productList.find(item=>item.ID == productID);
  }

  searchProductByName(productName:string):IProduct|undefined{
    return this.productList.find(item=>item.Name == productName);
  }

  getProductList():number[]{
    return this.productList.map(item=>item.ID);
  }
}
