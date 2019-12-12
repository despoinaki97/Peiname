import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';
import { Item } from 'src/app/item';
import { ordAccount } from 'src/app/ordaccount';

@Component({
  selector: 'ami-fullstack-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router: Router,private databank:DatabankService,private modalService: NgbModal, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(!this.has_Voted()){ //VALE ! GIA THN SWSTH LEITOYRGIA
      let cart = document.getElementById("cart").style.display = 'none';
    }
    else{
      let back = document.getElementById("Back").style.display = 'none';
    }
  }


  has_Voted():boolean{
    let username = localStorage.getItem('username');
    this.databank.getUsers().subscribe((users) => {
      users.forEach((each) => {
        if (( each.name == username)  && (each.hasVotedRestaurant == true) ) return true;
      })
    })
    return false;
  }


  go_Back(){
    this.router.navigateByUrl("/voteres")
  }

  go_to_Cart(){
    this.router.navigateByUrl("/bill-managment")
  }
}
