import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';
import { Item } from 'src/app/item';
import { ordAccount } from 'src/app/ordaccount';
import { SocketsService } from 'src/app/global/services';
declare var $: any;

@Component({
  selector: 'ami-fullstack-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss']
})
export class ItemdetailsComponent implements OnInit {
  item: Item;
  shops: Shop[];
  shopItems: Item[];
  closeResult: string;
  skat: boolean;
  defaults: string[];
  ingredients: string[];
  extra: string[];
  users: ordAccount[];
  items: Item[] = [];
  id: string;

  constructor(private router: Router, private databank: DatabankService, private modalService: NgbModal, private activatedRoute: ActivatedRoute, private socket: SocketsService) {

  }

  ngOnInit() {
    this.databank.getUsers().subscribe((users) => { this.users = users });
    this.id = this.activatedRoute.snapshot.paramMap.get('name');

    if (!this.databank.has_Voted()) {
      let ShareBtn = document.getElementById("Sharewith").style.display = 'none';
      let Add = document.getElementById("Add").style.display = 'none';

    }
    else {
      let back = document.getElementById("Back").style.display = 'none'
    }

    console.log(this.id);
    this.shops = this.databank.getShops();
    this.shops.forEach(element => {
      this.shopItems = element.shopItems;
    });
    this.shopItems.forEach(element => {
      if (element.name == this.id) {
        this.item = element;
        this.defaults = this.item.defaulting;
        this.ingredients = this.item.ingredients;
        this.extra = this.item.extra;

      }

    });

    // console.log(this.item);

  }

  async getItem(id) {
    console.warn("Get items")
    return new Promise<Item>((resolve, reject) => {
      this.databank.getAllItems().then((value: Item[]) => {
        console.log("Promised items")
        this.items = value;
        this.items.forEach((elem: Item) => {
          if (elem.name == id) {
            resolve(elem);
          }
        })
        reject();
      })
    })
  }

  has_Voted(): boolean {
    let username = localStorage.getItem('username');
    this.databank.getUsers().subscribe((users) => {
      users.forEach((each) => {
        if ((each.name == username) && (each.hasVotedRestaurant == true)) return true;
      })
    })
    return false;
  }

  add_to_Cart() {
    let item: Item
    this.getItem(this.item.name).then((elem) => {
      item = elem

      let username = localStorage.getItem('username')
      console.log("User: " + username + " orders " + item.name + " " + item._id);
      this.users.forEach((each) => {
        console.log(each.name);

        if (username === each.name) {
          this.databank.addToCart(item._id, [each]).then(() => {
            this.databank.call('update_cart', 0);

            this.router.navigateByUrl("/restmenu/Krassas")

          })
        }


      })
    });
  }

  // get_Item() {
  //   this.databank.getAllItems().forEach(element => {
  //     console.log(element);
  //   });
  // }
  go_Back() {
    this.router.navigateByUrl("/restmenu/Krassas")
  }

  showModal(): void {
    this.Share_Item();
    $('#myModal').appendTo("body");
  }


  Share_Item() {
    console.log(this.item);
    /* add to shared items ... */
  }
}






