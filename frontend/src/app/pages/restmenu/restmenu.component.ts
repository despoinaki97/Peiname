import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-restmenu',
  templateUrl: './restmenu.component.html',
  styleUrls: ['./restmenu.component.scss']
})
export class RestmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
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
