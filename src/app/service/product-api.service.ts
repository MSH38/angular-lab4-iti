import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private httpOptions = {};

  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
  }

  //Function Get All Products
  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/products`);
  }

  //Function Get All Categories
  getAllCategories():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/categories`);
  }

  //Function Get Products By CatID
  getProductsByCatID(CatID:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/products?CateogryID=${CatID}`);
  }

  //Function Get Product By ID
  getProductByID(productID:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.baseURL}/products/${productID}`);
  }

  //Function Add Product Using Form
  AddProduct(newProduct:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.baseURL}/products`,
    JSON.stringify(newProduct),
    this.httpOptions)
  }
}
