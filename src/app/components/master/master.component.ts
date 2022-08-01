import { Component, OnInit } from '@angular/core';
import { CatData } from 'src/app/Models/cat-data';
import { ICateogry } from 'src/app/Models/icateogry';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  catListOfProduct : ICateogry[];
  catSelected:number = 0;
  receivedTotalPrice:number = 0;
  receivedCatData:CatData[] = [];

  constructor() {
    this.catListOfProduct = [
      {ID:1 , Name:'Mobile'},
      {ID:2 , Name:'Laptop'},
      {ID:3 , Name:'TV'}
    ];
  }

  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice:number){
    console.log(totalPrice);
    this.receivedTotalPrice = totalPrice;
  }

  getAllCatData(catData:any){
    // console.log(catData);
    this.receivedCatData = catData;
  }

}
