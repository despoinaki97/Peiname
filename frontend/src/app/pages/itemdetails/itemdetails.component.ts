import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';
import { Item } from 'src/app/item';
declare var $: any;

@Component({
  selector: 'ami-fullstack-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss']
})
export class ItemdetailsComponent implements OnInit {
  item:Item;
  shops:Shop[];
  shopItems:Item[];
  closeResult: string;
  skat:boolean;
  defaults:string[];
  ingredients:string[];
  extra:string[];

  constructor(private databank:DatabankService,private modalService: NgbModal, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('name');
    console.log(id);
    this.shops=this.databank.getShops();
    this.shops.forEach(element => {
      this.shopItems=element.shopItems;
    });

    this.shopItems.forEach(element => {
      if(element.name==id){
        this.item=element;
        this.defaults = this.item.defaulting;
        this.ingredients = this.item.ingredients;
        this.extra = this.item.extra;

      }

    });
    
    




  }
  showModal():void {
    $('#myModal').appendTo("body") ;
  }



  
}






