import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { DatabankService } from 'src/app/databank.service';
import { Item } from 'src/app/item';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-restmenu',
  templateUrl: './restmenu.component.html',
  styleUrls: ['./restmenu.component.scss']
})
export class RestmenuComponent implements OnInit {
  found:boolean=false;
  foundpizza:boolean=false;

  shops:Shop[];
  shopItems:Item[];
  pites:Item[];
  pizzes:Item[];
  salads:Item[];
  open:boolean;
  constructor(private databank:DatabankService,private router: Router) { }

  ngOnInit() {
    this.shops=this.databank.getShops();
    this.shops.forEach(element => {
      this.shopItems=element.shopItems;
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
          if(element.name=="Ceasar's Salad")
            return this.found=true;
      });  
      if(this.found==true)
        this.router.navigate(['/ingredients']);
  }

  gotoitemdetails(){
    this.pizzes.forEach(element=>{
        if(element.name=="Pizza Margarita")
          return this.foundpizza=true;
    });  
    if(this.foundpizza==true)
      this.router.navigate(['/itemdetails']);
}
// printhello(){
//   console.log("wtf");
// }

}
