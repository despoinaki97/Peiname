import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { Rating } from './rating';
import { Item } from './item';

import { ordAccount } from './ordaccount';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabankService {
  private shops: Shop[];
  private users: ordAccount[];
  constructor() {
    this.users = [
      new ordAccount("Giorgos.S", [], "#0057FF"),
      new ordAccount("Despoina.S", [new Item("Krepa Sokolata Banana", 110, 220, 210, 760, 5)], "#FF00F5"),
      new ordAccount("Kostas.D", [new Item("Coca Cola", 50, 120, 0, 620, 2)], "#1ED847")
    ]
    /*[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ] */
    this.shops = [new Shop(1,"Coffee-Land",2.0,[new Rating(0,this.users[2],"Πολύ καλο και γρήγορο",5.0)],"62 Martyrwn 87","24210-12345" , "../../../assets/images/Rectangle 2.2.png" , "15'" , "1,5€"),
      new Shop(1,"Magevmata",3.5,[new Rating(0,this.users[2],"Πολύ καλο και γρήγορο",5.0)],"Therissos","24210-12345" , "../../../assets/images/Rectangle 2.2 (1).png" , "30'" , " 5€"),
      new Shop(2,"H Pita tou Papu",4,[new Rating(0,this.users[2],"Πολύ καλο και γρήγορο",5.0)],"Aigaiou 3","24210-12345" , "./../../assets/images/Rectangle 2.2 (2).png" , "32'" , "4€"),
      new Shop(3,"Gyrogonia",5,[new Rating(0,this.users[2],"Πολύ καλο και γρήγορο",5.0)],"Dodekanissou 20","24210-12345" , "../../../assets/images/Rectangle 2.2 (3).png" , "45'" , "3,5€"),
      new Shop(4,"Xoboli",4,[new Rating(0,this.users[2],"Πολύ καλο και γρήγορο",5.0)],"Athinas 19","24210-12345" , "../../../assets/images/Rectangle 2.2 (4).png" , "25'" , "7,5€"),
    ]
    
    // this.users[0].addSharedItem([
    //   this.users[1],
    //   this.users[2]
    // ], new Item("Ceasar's Salad", 100, 20, 40, 320, 9))
    // this.users[0].addSharedItem([
    //   this.users[1]
    // ], new Item("Pizza Margharita", 100, 20, 40, 320, 10))
    
   }


  getShops():Shop[]{
    return this.shops;
  }
  getUsers():Observable<ordAccount[]>{
    return of(this.users);
  }
}
