import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { Rating } from '../../rating';
import { ordAccount } from '../../ordaccount';
import { DatabankService } from '../../databank.service';
import { Observable, of,Subscribable } from 'rxjs';

@Component({
  selector: 'ami-fullstack-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  
  restaurants: Shop[] ;
  constructor(private DatabankService: DatabankService) { }

  getShops(): void {
    this.restaurants = this.DatabankService.getShops()
  }

  ngOnInit() {
    this.getShops();
  }

}
