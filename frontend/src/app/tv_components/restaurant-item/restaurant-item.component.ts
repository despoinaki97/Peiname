import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/shop';

@Component({
  selector: 'ami-fullstack-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {

  @Input() restaurant: Shop;  
  constructor() { } 

  ngOnInit() {
  }

}
