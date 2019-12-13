import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { SocketsService } from '../global/services';
import { DatabankService } from '../databank.service';
import { ordAccount } from '../ordaccount';
import { Item } from '../item';
@Component({
  selector: 'ami-fullstack-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  constructor(private router: Router, private databank: DatabankService, private modalService: NgbModal, private activatedRoute: ActivatedRoute, private socket: SocketsService) {

  }
  public Users: ordAccount[];
  public Items: Item[][] = [];
  public cart: {
    quantity: number,
    item: Item
  }[][]


  open: boolean = false;
  getName() {
    return localStorage.getItem('username')
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
  }

  close(){
    this.modalService.dismissAll();
  }
  submit(){
    this.modalService.dismissAll();
    this.router.navigateByUrl('/bill-managment');
  }
}
