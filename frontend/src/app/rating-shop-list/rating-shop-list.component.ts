import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { Rating } from '../rating';
import { ordAccount } from '../ordaccount';


@Component({
  selector: 'ami-fullstack-rating-shop-list',
  templateUrl: './rating-shop-list.component.html',
  styleUrls: ['./rating-shop-list.component.scss']
})
export class RatingShopListComponent implements OnInit {

  constructor() { }


  Shops = [
    new Shop(0,"Gyrogwnia",4.0,[
      new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
      new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
      new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5

    ]
    ),
    new Shop(0,"KRasas",2.0,[
      new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
      new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5

    ]
    ),
    new Shop(0,"Xobolh",4.0,[
      new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
      new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
      new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5

    ]
    ),
    new Shop(0,"Tu sifaliou th taverna",5.0,[
      new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
      new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
      new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5

    ]
    ),

    new Shop(0,"Pita tou Papou",5.0,[
      new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
      new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
      new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5

    ]
    )    
  ]
  ngOnInit() {
  }

}


