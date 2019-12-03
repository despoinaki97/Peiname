import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { Rating } from './rating';
import { Item } from './item';

import { ordAccount } from './ordaccount';
import { BehaviorSubject , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabankService {
  private shops: Shop[];
  private users: ordAccount[];
  private users_subject: BehaviorSubject<ordAccount[]>;
  constructor() {
    this.users = [
      new ordAccount("Giorgos.S", [], "#0057FF"),
      new ordAccount("Despoina.S", [], "#FF00F5"),
      new ordAccount("Kostas.D", [], "#1ED847")
    ]
    this.users_subject = new BehaviorSubject(this.users);
    /*[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ] */
    this.shops = [new Shop(1, "Coffee-Land", 2.0, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "62 Martyrwn 87", "24210-12345", "../../../assets/images/Rectangle 2.2.png", "15'", "1,5€","(94 ratings)"),
    new Shop(1, "Magevmata", 3.5, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Therissos", "24210-12345", "../../../assets/images/Rectangle 2.2 (1).png", "30'", " 5€","(186 ratings)"),
    new Shop(2, "H Pita tou Papu", 4, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Aigaiou 3", "24210-12345", "./../../assets/images/Rectangle 2.2 (2).png", "32'", "4€","(240 ratings)"),
    new Shop(3, "Gyrogonia", 5, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Dodekanissou 20", "24210-12345", "../../../assets/images/Rectangle 2.2 (3).png", "45'", "3,5€","(72 ratings)"),
    new Shop(4, "Xoboli", 4, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Athinas 19", "24210-12345", "../../../assets/images/Rectangle 2.2 (4).png", "25'", "7,5€","(133 ratings)"),
    ]

    // this.users[0].addSharedItem([
    //   this.users[1],
    //   this.users[2]
    // ], new Item("Ceasar's Salad", 100, 20, 40, 320, 9))
    // this.users[0].addSharedItem([
    //   this.users[1]
    // ], new Item("Pizza Margharita", 100, 20, 40, 320, 10))
    // this.addItem([this.users[0],this.users[1], this.users[2]], new Item("Caesar Salad", 1, 1, 1, 1, 9, [], "Tomatoes sauce , cheese ,tomatoes"))
    // this.addItem([this.users[0],this.users[1]], new Item("Pizza Margarita", 1, 1, 1, 1, 16, [], "Tomatoes sauce , cheese ,tomatoes"))
    // this.addItem([this.users[0]],new Item("Pizza anana", 1, 1, 1, 1, 8.5, [], "Tomatoes sauce , cheese ,tomatoes,blah, blah,ananna"))
  }

  addItem(users: ordAccount[], item: Item) {
    console.warn("DatabankService:addItem()")
    console.log(this.users)

    if (users.length == 0) {
      console.error("addSharedItem(): not enough users tp share the item with")
      return
    }
    if (users.length == 1) {
      users[0].addItem(item);
      this.getUsers()
      return
    }
    ordAccount.addSharedItem(users, item);
    this.update()
  }

  update(){
    this.users_subject.next(this.users);
    
    console.warn("DatabankService:update()")
    console.warn(this.users[0].orderedItems)
  }
  getShops(): Shop[] {
    this.update();
    console.warn("DatabankService:getShops()")
    return this.shops;
  }
  getUsers():BehaviorSubject<ordAccount[]> {
    this.update();
    console.warn("DatabankService:getUsers()")
    return this.users_subject;
  }
}
