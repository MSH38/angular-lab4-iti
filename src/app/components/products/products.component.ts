import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CatData } from 'src/app/Models/cat-data';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductApiService } from 'src/app/service/product-api.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit , OnChanges {

  clientName:string = "Mahmoud Samy";
  storeInfoClass : Store;
  dateNow:Date = new Date();

  productListCat:IProduct[] = [];
  @Input() receivedCatId:number = 0;
  @Output() allCatData:EventEmitter<any>;
  totalPrice:number = 0;
  @Output() totalPriceChanged:EventEmitter<number>;
  catData:CatData[] = [];


constructor(private productService:ProductService, private router:Router, private APIProductService:ProductApiService){

  this.totalPriceChanged = new EventEmitter<number>();
  this.allCatData = new EventEmitter<any>();
  this.storeInfoClass = new Store('ITI Store', ["Mansoura","Smart","Alex","Sohag"], "https://fakeimg.pl/250x100/");

}
  ngOnChanges(): void {

    if(this.receivedCatId == 0){
      this.APIProductService.getAllProducts().subscribe((productList: IProduct[])=>{
        this.productListCat = productList;
      })
    }
    else
    {
      this.APIProductService.getProductsByCatID(this.receivedCatId).subscribe((productList: IProduct[])=>{
        this.productListCat = productList;
      })
    }
  }

  ngOnInit(): void {
    
    this.APIProductService.getAllProducts().subscribe((productList: IProduct[])=>{
      this.productListCat = productList;
    })
    
  }

  increaseQuantity(i:IProduct , itemCount:any){

    return i.Quantity -= itemCount;
  }

  updateTotalPrice(itemPrice:number , itemCount:any){

    this.totalPrice += (itemPrice*+itemCount);

    this.totalPriceChanged.emit(this.totalPrice);
  }

  getCatData(itemName:string , itemPrice:number , itemCount:any){

    this.catData.push({Name : itemName , Price:itemPrice, Count:itemCount});
    this.allCatData.emit(this.catData)
  }
  
  openProductDetails(itemID:number){
    this.router.navigate(['products',itemID])
  }

  getAllCat(){
    
    this.APIProductService.getAllCategories().subscribe((productList: IProduct[])=>{
      this.productListCat = productList;
    })
  }
}
