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


    //set_firsti()
    set_First(){
      let first = {
        restaurant: true,
        'is_first': this.restaurant.id == 1
      }

      return first;
    }


}
