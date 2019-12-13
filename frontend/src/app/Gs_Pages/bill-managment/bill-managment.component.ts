import { Component, OnInit, Inject, PLATFORM_ID, Injector } from '@angular/core';
import { Shop } from 'src/app/shop';
import { Rating } from 'src/app/rating';
import { ordAccount } from 'src/app/ordaccount';
import { Item } from 'src/app/item';
import { DatabankService } from 'src/app/databank.service';
import { ThrowStmt, analyzeAndValidateNgModules } from '@angular/compiler';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SocketsService } from '../../global/services';

@Component({
  selector: 'ami-fullstack-bill-managment',
  templateUrl: './bill-managment.component.html',
  styleUrls: ['./bill-managment.component.scss']
})
export class BillManagmentComponent implements OnInit {

  closeResult: string;
  i: number;
  private modalComponent: NgbModal;
  users: ordAccount[];
  public Users: ordAccount[];
  public Items: Item[][] = [];
  public cart: {
    quantity: number,
    item: Item
  }[][]

  //open: boolean = false;

  getUsers() {
    this.DataBankService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  constructor(private DataBankService: DatabankService,@Inject(PLATFORM_ID) private plaformId:Object,private injector: Injector,private router:Router, private socket:SocketsService) {
    if(isPlatformBrowser(this.plaformId)){
      this.modalComponent = this.injector.get(NgbModal);
    }
   }

  open(content) {
    this.modalComponent.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
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
    this.DataBankService.getUsersOrderedItems((item, user) => {

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
    this.i = 0;
    this.updateCarts();
    this.socket.syncMessages('update_cart').subscribe((data) => {
      this.updateCarts();
    })

}}