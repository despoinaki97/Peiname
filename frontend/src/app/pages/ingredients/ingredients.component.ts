import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'ami-fullstack-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showModal():void {
    $('#myModal').appendTo("body") ;
  }
}
