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
      new Shop(1,"Coffee-Land",2.0,[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ],"62 Martyrwn 87","24210-12345" , "../../../assets/images/Rectangle 2.2.png" , "15'" , "1,5€"),
      
      new Shop(0,"Magevmata",3.5,[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ],"Therissos","24210-12345" , "../../../assets/images/Rectangle 2.2 (1).png" , "30'" , " 5€"),

      new Shop(0,"H Pita tou Papu",4,[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ],"Aigaiou 3","24210-12345" , "./../../assets/images/Rectangle 2.2 (2).png" , "32'" , "4€"),

      new Shop(0,"Gyrogonia",5,[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ],"Dodekanissou 20","24210-12345" , "../../../assets/images/Rectangle 2.2 (3).png" , "45'" , "3,5€"),

      new Shop(0,"Xoboli",4,[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ],"Athinas 19","24210-12345" , "../../../assets/images/Rectangle 2.2 (4).png" , "25'" , "7,5€"),



    ]

  }

}
