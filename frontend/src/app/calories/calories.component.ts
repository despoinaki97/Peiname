import { Component, OnInit } from '@angular/core';
import { ordAccount } from '../ordaccount';
import { Item } from '../item';
import { DatabankService } from '../databank.service';
import { SocketsService } from '../global/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})
export class CaloriesComponent implements OnInit {

  constructor(private DataBankService: DatabankService,private socket:SocketsService,private router:Router) { }
  public innerWidth: any;
  public innerHeight: any;
  public Users: ordAccount[];
  public Items: Item[][] = [];
  public cart: {
    quantity: number,
    item: Item
  }[][]
  // Users = [
  //   // new ordAccount("Kostas.D",[
  //   //   new Item("Pizza Anana",300,50,60,650),
  //   //   new Item("Ceasar's Salad",100,20,40,320),
  //   //   new Item("Skepasth Xoirino",310,120,170,1160),
  //   //   new Item("Krepa Sokolata Banana",110,220,210,760)


  //   // ]),
  //   // new ordAccount("Giorgos.S",[
  //   //   new Item("Pizza Anana",300,50,60,600),
  //   //   new Item("Ceasar's Salad",100,20,40,320),
  //   //   new Item("Pizza Margaritta",310,120,110,760)

  //   // ]),
  //   // new ordAccount("Despoina.G",[
  //   //   new Item("Fileto Kotopoulo Merida",120,40,80,420),
  //   //   new Item("Ceasar's Salad",100,20,40,320),
  //   //   new Item("Coca Cola",50,120,0,620) 
  //   // ])
  // ]
  getSeat(){
    return +localStorage.getItem('seat');
  }
  getTotalPrice(x): number {
    let sum = 0;
    if (this.Items[x]) {
      this.Items[x].forEach((each: Item) => {
        sum += each.price
      })
    }
    return sum
  }

  updateCarts() {
    this.Items = [];
    this.cart = [];
    for (let i: number = 0; i < 3; i++) {
      this.Items[i] = [];
      this.cart[i] = [];
    }
    this.DataBankService.getUsersOrderedItems((item, user) => {

      console.log(item, user);
      this.Items[user.seat].push(item)
      this.checkDouble(user.seat, item);
    })

  }
  checkDouble(seat, item) {
    let result = false;
    this.cart[seat].forEach(each => {
      if (each.item.name == item.name) {
        each.quantity++;
        result = true;
      }
    })
    if (result === false) {
      this.cart[seat].push({
        quantity: 1,
        item: item
      })
    }
  }

  ngOnInit() {
    this.socket.syncMessages("order_complete").subscribe((data) => {
        this.router.navigateByUrl("/wall_order_waiting/1")// TBI TO IDLE PAGE
    })
    this.DataBankService.getAllUsers().then(users => {
      this.Users = users;

      this.innerWidth = window.innerWidth / this.Users.length;
      this.innerHeight = window.innerHeight;
      this.updateCarts();
      this.socket.syncMessages('update_cart').subscribe((data) => {
        window.location.reload(); // LOOK AGAIN
      })
    })


  }

}
