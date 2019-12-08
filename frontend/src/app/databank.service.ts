import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { Rating } from './rating';
import { Item } from './item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { map } from 'rxjs/operators';

import { ordAccount } from './ordaccount';
import { BehaviorSubject, of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabankService {
  private shops: Shop[];
  private users: ordAccount[];
  private users_subject: BehaviorSubject<ordAccount[]>;
  private event_json;
  constructor(private http: HttpClient) {
    this.users = [
      // new ordAccount(0, "Giorgos.S", [], "#0057FF", "../assets/Giorgos.png"),
      // new ordAccount(1, "Despoina.S", [], "#FF00F5", "../assets/girl.png")
      // , new ordAccount(2, "Kostas.D", [], "#1ED847", "../assets/Kostas.png")
    ]
    this.users_subject = new BehaviorSubject(this.users);
    /*[
        new Rating(0,new ordAccount("Kostas.D"),"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,new ordAccount("Giorgos.S"),"Good, but late!",4.0),
        new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
      ] */
    this.shops = [new Shop(1, "Coffee-Land", 2.0, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "62 Martyrwn 87", "24210-12345", "../../../assets/images/Rectangle 2.2.png", "15'", "1,5€",
      [new Item("freddo espresso")]
      , "(94 ratings)"),
    new Shop(1, "Magevmata", 3.5, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Therissos", "24210-12345", "../../../assets/images/Rectangle 2.2 (1).png", "30'", " 5€",
      [new Item("kotosoupa")]
      , "(186 ratings)"),
    new Shop(2, "H Pita tou Papu", 4, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Aigaiou 3", "24210-12345", "./../../assets/images/Rectangle 2.2 (2).png", "32'", "4€",
      [new Item("guros")]
      , "(240 ratings)"),
    new Shop(3, "Gyrogonia", 5, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Dodekanissou 20", "24210-12345", "../../../assets/images/Rectangle 2.2 (3).png", "45'", "3,5€",
      [new Item("guros")]
      , "(72 ratings)"),
    new Shop(4, "Xoboli", 4, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Athinas 19", "24210-12345", "../../../assets/images/Rectangle 2.2 (4).png", "25'", "7,5€",
      [new Item("guros")]
      , "(133 ratings)"),
    new Shop(5, "Krassas", 4, [new Rating(0, this.users[2], "Πολύ καλο και γρήγορο", 5.0)], "Parlama&Menelaou", "24210-12345", "../../../assets/krassas.webp", "25'", "7,5€",
      [new Item("Guros Pork", null, null, null, null, 3, null, "Pork ,tomato, onion, potatos","../../../assets/xoirinos.jpg"),
      new Item("Guros Chicken", null, null, null, null, 3.2, null, "Chicken, tomato, mayonaise, potatos","../../../assets/xoirinos.jpg"),
      new Item("Kebab", null, null, null, null, 3.5, null, "Kebab ,tomato, onion, potatos, must..."),
      new Item("Pita Beef", null, null, null, null, 3.2, null, "Beef, potatos, iceberg, ketchup, must..."),
      new Item("Pizza Pepperoni", null, null, null, null, 8.0, null, "Mozzarella,tomato sauce,tepperoni"),
      new Item("Pizza Margarita", null, null, null, null, 7.0, null, "Mozzarella,tomato sauce","../../../assets/margarita.png"),
      new Item("Pizza Hawaiian", null, null, null, null, 7.5, null, "Mozzarella,anana,tomato sauce...","../../../assets/hawaiian.jpg"),
      new Item("Ceasar's Salad", null, null, null, null, 6.5, null, "Letuce,chicken,regatto,corn,..","../../../assets/sizar.jpg"),
      new Item("Village Salad", null, null, null, null, 4.5, null, "Cucumber,tomato,feta,olives"),
      new Item("Koukouvagia Salad", null, null, null, null, 4, null, "Paximadi,tomato,feta,oregano")

      ], "(133 ratings)"),
    ]

    /*Item Initialisation for user 0 -> Giorgos */
    // this.addItem([this.users[0], this.users[1], this.users[2]], new Item("Caesar Salad", 100, 20, 40, 320, 9, [], "Tomatoes sauce , cheese ,tomatoes"));
    // this.addItem([this.users[0], this.users[1]], new Item("Pizza Margarita", 100, 20, 40, 320, 16, [], "Tomatoes sauce , cheese ,tomatoes,blah, blah"));
    // this.addItem([this.users[0]], new Item("Pizza Anana", 100, 20, 40, 320, 8.5, [], "Tomatoes sauce , cheese ,tomatoes,blah, blah,ananna"));


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


  createUser(seat_num: number, name: string,isHost:boolean) {
    var color = '#0057FF'
    var image = '../assets/Giorgos.png'
    if (seat_num === 1) {
      color = '#FF00F5'
      image = '../assets/girl.png'
    } else if (seat_num === 2) {
      color = '#1ED847'
      image = '../assets/Kostas.png'
    }
    let tmp = new ordAccount(seat_num, name, [], color, image)
    tmp.isHost = isHost;
    // this.users.push(tmp);
    this.event_json = {
      name: name,
      color: color,
      seat: seat_num,
      isHost: isHost,
      user_Icon: image,
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.post('http://' + environment.host + '/api/users', JSON.stringify(this.event_json), {
      headers: headers
    })
      .subscribe(data => {
        console.log(data);
      });

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

  getUsersFromDB(){

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.get('http://' + environment.host + '/api/users', {
      headers: headers
    }).subscribe((json: ordAccount[]) => {
        this.users_subject.next(json);
    })
  }

  update() {
    // const headers = new HttpHeaders()
    //   .set('Content-Type', 'application/json');
    // this.http.get('http://' + environment.host + '/api/users', {
    //   headers: headers
    // })
    //   .subscribe((res: Response) => {
    //     console.log(Array.of(res.json()));

    //   });
    this.getUsersFromDB();
    this.users_subject.subscribe((array)=>{
      this.users = array;
    })
    console.log("update " + this.users)
    // console.warn(this.users[0].orderedItems)
  }
  getShops(): Shop[] {
    // this.update();
    console.warn("DatabankService:getShops()")
    return this.shops;
  }
  getUsers(): BehaviorSubject<ordAccount[]> {
    this.update();
    console.warn("DatabankService:getUsers()")
    return this.users_subject;
  }
  call(event_t, message_t) {
    this.event_json = {
      event: event_t,
      message: message_t
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.post('http://' + environment.host + '/api/example/sendMessageToClients', JSON.stringify(this.event_json), {
      headers: headers
    })
      .subscribe(data => {
        console.log(data);
      });
  }

  fromJSON(json) :ordAccount[]{
    let tmp : ordAccount[] = []
    for (var propName in json)
        tmp[propName] = json[propName];
    return tmp;
}

}


