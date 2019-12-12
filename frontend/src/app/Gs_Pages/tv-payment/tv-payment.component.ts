import { Component, OnInit } from '@angular/core';
import { ordAccount } from '../../ordaccount';
import { Item } from '../../item';
import { DatabankService } from 'src/app/databank.service';
import * as Q from 'q';
import { SocketsService } from 'src/app/global/services';

@Component({
  selector: 'ami-fullstack-tv-payment',
  templateUrl: './tv-payment.component.html',
  styleUrls: ['./tv-payment.component.scss']
})
export class TvPaymentComponent implements OnInit {

  constructor(private DataBankService: DatabankService, private socket: SocketsService) { }
  public innerWidth: any;
  public innerHeight: any;
  public Users: ordAccount[];
  public Items: Item[][] = [];
  public cart: {
    quantity: number,
    item: Item
  }[][]
  // giorgos = new ordAccount("Giorgos.S", [
  //   new Item("Pita gyro kotopoulo ", 300, 50, 60, 650, 3.5),
  //   new Item("Krepa Sokolata Banana", 110, 220, 210, 760, 5)
  // ], "black")
  // despoina = new ordAccount("Despoina.S", [

  //   new Item("Pizza Anana", 300, 50, 60, 600, 10),
  // ], "#FF00F5")
  // kostas = new ordAccount("Kostas.D", [
  //   new Item("Fileto Kotopoulo Merida", 120, 40, 80, 420, 6),
  //   new Item("Coca Cola", 50, 120, 0, 620, 2)
  // ], "#1ED847")
  getUsers() {
    this.DataBankService.getUsers().subscribe((users: ordAccount[]) => {
      console.warn("users_updated", users)
      this.Users = users;
    });

  }

  // async getItems() {
  //   return new Promise((resolve, reject) => {
  //     this.DataBankService.getUsersOrderedItems().then((value: Item[][]) => {
  //       resolve(value);
  //     })
  //   });
  // }

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

    this.getUsers();
    this.updateCarts();
    this.socket.syncMessages('update_cart').subscribe((data) => {
      window.location.reload();
    })
    // this.DataBankService.addItem([this.Users[0]],new Item("Pizza Margarita", 1, 1, 1, 1, 16, [], "Tomatoes sauce , cheese ,tomatoes"))

    // this.giorgos.addSharedItem([
    //   this.despoina,
    //   this.kostas
    // ], new Item("Ceasar's Salad", 100, 20, 40, 320, 9))
    // this.giorgos.addSharedItem([
    //   this.despoina
    // ], new Item("Pizza Margharita", 100, 20, 40, 320, 10))

    this.DataBankService.getUsers().subscribe(users => {
      this.innerWidth = (window.innerWidth * 90 / 100) / users.length;
    })

    // this.innerWidth = (window.innerWidth * 90 / 100) / ;
    this.innerHeight = window.innerHeight * 0.9;
  }



}
