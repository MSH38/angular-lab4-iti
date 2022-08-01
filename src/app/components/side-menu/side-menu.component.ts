import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  userNationalId:string = "29710011828911";
  userCreditCardNumber:string = "111122225555"

  constructor() { }

  ngOnInit(): void {
  }

}
