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

  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/products`);
  }

  getAllCategories():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/categories`);
  }

  getProductsByCatID(CatID:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/products?CateogryID=${CatID}`);
  }

  getProductByID(productID:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.baseURL}/products/${productID}`);
  }

  AddProduct(newProduct:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.baseURL}/products`,
    JSON.stringify(newProduct),
    this.httpOptions)
  }
}
