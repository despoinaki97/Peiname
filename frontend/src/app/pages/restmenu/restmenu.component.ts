import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { DatabankService } from 'src/app/databank.service';
import { Item } from 'src/app/item';

@Component({
  selector: 'ami-fullstack-restmenu',
  templateUrl: './restmenu.component.html',
  styleUrls: ['./restmenu.component.scss']
})
export class RestmenuComponent implements OnInit {
  shops:Shop[];
  shopItems:Item[];
  constructor(private databank:DatabankService) { }

  ngOnInit() {
    this.shops=this.databank.getShops();
    this.shops.forEach(element => {
      this.shopItems=element.shopItems;
    });

    
  let acc = document.getElementsByClassName("accordion");
  let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  }



}
