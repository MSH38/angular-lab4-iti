import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/service/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {

  product:IProduct|undefined = undefined;
  prdIDList:number[] = [];
  currentPrdID:number = 0;
  currentIndex:number = 0;

  constructor(private productService:ProductService,
              private router:Router, 
              private activeRouter:ActivatedRoute,
              private location:Location) {}

  ngOnInit(): void {

    this.prdIDList =  this.productService.getProductList();
    this.activeRouter.paramMap.subscribe(paramMap=>{
      this.currentPrdID=(paramMap.get('itemID'))?Number(paramMap.get('itemID')):0;
      let foundedProduct = this.productService.getProductByID(this.currentPrdID);
      if(foundedProduct){
          this.product = foundedProduct;
        }
        else
        {
          alert('Product Not Founded');
          this.location.back();
        }
    })
  }

  goback(){
    this.location.back();
  }

  searchByName(itemName:string){
    let foundedProduct = this.productService.searchProductByName(itemName);
    if(foundedProduct)
    {
      this.product = foundedProduct;
    }
    else
    {
      alert("Product Not Founded")
    }
  }

  PrevProduct(){
    this.currentIndex = this.prdIDList.findIndex((item) => item == this.currentPrdID);
    this.router.navigate(['/products',this.prdIDList[--this.currentIndex]])
  }

  nextProduct(){
    this.currentIndex = this.prdIDList.findIndex((item) => item == this.currentPrdID);
    this.router.navigate(['/products',this.prdIDList[++this.currentIndex]])
  }
}
