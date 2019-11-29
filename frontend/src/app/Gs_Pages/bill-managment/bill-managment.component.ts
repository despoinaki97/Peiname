import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { Rating } from 'src/app/rating';
import { ordAccount } from 'src/app/ordaccount';
import { Item } from 'src/app/item';

@Component({
  selector: 'ami-fullstack-bill-managment',
  templateUrl: './bill-managment.component.html',
  styleUrls: ['./bill-managment.component.scss']
})
export class BillManagmentComponent implements OnInit {


  users: ordAccount;

  constructor() { }

  ngOnInit() {
    this.users = new ordAccount("Giorgos",
      [new Item("Caesar Salad", 1, 1, 1, 1, 9, [new ordAccount("Despoina"), new ordAccount("Kwstas")], "Tomatoes sauce , cheese ,tomatoes"),
      new Item("Pizza Margarita", 1, 1, 1, 1, 16, [new ordAccount("Despoina")], "Tomatoes sauce , cheese ,tomatoes"),
      new Item("Pizza anana", 1, 1, 1, 1, 8.5, [], "Tomatoes sauce , cheese ,tomatoes,blah, blah,ananna")
      ]

    )


  }




}
