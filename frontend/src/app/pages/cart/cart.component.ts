import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';
import { Item } from 'src/app/item';
import { ordAccount } from 'src/app/ordaccount';
import { SocketsService } from 'src/app/global/services';
import { CartModalComponent } from 'src/app/cart-modal/cart-modal.component';

@Component({
  selector: 'ami-fullstack-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public users: ordAccount[];
  constructor(private router: Router, private databank: DatabankService, private modalService: NgbModal, private activatedRoute: ActivatedRoute, private socket: SocketsService) {

  }
  public Users: ordAccount[];
  public Items: Item[][] = [];
  public cart: {
    quantity: number,
    item: Item
  }[][]

  public voted:boolean = false;

  open: boolean = false;
  getName() {
    return localStorage.getItem('name')
  }
  getLength() {

    return this.Items[+localStorage.getItem("seat")].length;
  }
  getSeat() {
    return +localStorage.getItem("seat");
  }
  getTotalPrice(): number {
    let x = localStorage.getItem("seat")
    let sum = 0;
    if (this.Items[x]) {
      this.Items[x].forEach((each: Item) => {
        sum += each.price
      })
    }
    return +sum.toFixed(2);
  }

  updateCarts() {
    this.Items = [];
    this.cart = [];
    for (let i: number = 0; i < 3; i++) {
      this.Items[i] = [];
      this.cart[i] = [];
    }
    this.databank.getUsersOrderedItems((item, user) => {

      // console.log(item, user);
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
    this.updateCarts();
    this.socket.syncMessages('update_cart').subscribe((data) => {
      this.updateCarts();
    })
    if (!this.databank.has_Voted()) { //VALE ! GIA THN SWSTH LEITOYRGIA
      // let cart = document.getElementById("cart").style.display = 'none';
      this.voted = false;
    }
    else {
      // let back = document.getElementById("Back").style.display = 'none';
      this.voted = true;
    }
  }




  go_Back() {
    this.router.navigateByUrl("/voteres")
  }

  toggleCart() {
    this.modalService.open(CartModalComponent)

  }
}
