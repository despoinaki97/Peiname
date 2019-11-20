import { Component, OnInit } from '@angular/core';
import { ordAccount } from '../ordaccount';
import { Item } from '../item';

@Component({
  selector: 'ami-fullstack-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})
export class CaloriesComponent implements OnInit {

  constructor() { }
  public innerWidth: any;
  public innerHeight: any;

  Users = [
    new ordAccount("Kostas.D",[
      new Item("Pizza Anana",300,50,60,650),
      new Item("Ceasar's Salad",100,20,40,320),
      new Item("Skepasth Xoirino",310,120,170,1160),
      new Item("Krepa Sokolata Banana",110,220,210,760)


    ]),
    new ordAccount("Giorgos.S",[
      new Item("Pizza Anana",300,50,60,600),
      new Item("Ceasar's Salad",100,20,40,320),
      new Item("Pizza Margaritta",310,120,110,760)

    ]),
    new ordAccount("Despoina.G",[
      new Item("Fileto Kotopoulo Merida",120,40,80,420),
      new Item("Ceasar's Salad",100,20,40,320),
      new Item("Coca Cola",50,120,0,620) 
    ])
  ]
  
  ngOnInit() {
    this.innerWidth = window.innerWidth/this.Users.length;
    this.innerHeight = window.innerHeight;
  }

}
