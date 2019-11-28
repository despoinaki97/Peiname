import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { Rating } from '../../rating';
import { ordAccount } from '../../ordaccount';

@Component({
  selector: 'ami-fullstack-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  
  restaurants: Shop[] ;
  constructor() { }

  ngOnInit() {

    this.restaurants = [
      new Shop(0,"Coffee-Land",4.7,[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ],"lalaAdr","lalaTEL" , "../../../assets/images/Rectangle 2.2.png")
    ]

  }

}
