import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { DatabankService } from 'src/app/databank.service';
import { Item } from 'src/app/item';
import { element } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ami-fullstack-restmenu',
  templateUrl: './restmenu.component.html',
  styleUrls: ['./restmenu.component.scss']
})
export class RestmenuComponent implements OnInit {
  found:boolean;
  foundpizza:boolean;
  shop:Shop;
  shops:Shop[];
  shopItems:Item[];
  pites:Item[];
  pizzes:Item[];
  salads:Item[];
  open:boolean;
  constructor(private databank:DatabankService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('name');

    this.shops=this.databank.getShops();
    this.shops.forEach(element => {
      this.shopItems=element.shopItems;
      if(element.name==id){
        this.shop=element;
      }
    });

    this.pites = this.shopItems.slice(0, 4);
    this.pizzes = this.shopItems.slice(4, 7);
    this.salads = this.shopItems.slice(7,11);

    
    
  let acc = document.getElementsByClassName("accordion");
  let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   // this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      this.open=true;
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  }

  gotoingredients(){
      this.salads.forEach(element=>{
          if(element.name=="Ceasar's Salad"){
             this.found=true;
          }
      });  
      if(this.found==true){
        this.router.navigate(['/ingredients']);
      }else{
        console.log("Pare ");
      }
  }

  gotoitemdetails(){
    this.pizzes.forEach(element=>{
        if(element.name=="Pizza Margarita"){
           this.foundpizza=true;
           
        }
        
    });  
    if(this.foundpizza==true){
      this.router.navigate(['/itemdetails']);
    }else{
      console.log("Pare ");
    }
}
// printhello(){
//   console.log("wtf");
// }

}
