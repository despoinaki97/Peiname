import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { Rating } from '../rating';
import { ordAccount } from '../ordaccount';
import { DatabankService } from '../databank.service';
import { SocketsService } from '../global/services';
import { Router } from '@angular/router';


@Component({
  selector: 'ami-fullstack-rating-shop-list',
  templateUrl: './rating-shop-list.component.html',
  styleUrls: ['./rating-shop-list.component.scss']
})
export class RatingShopListComponent implements OnInit {
  private users: ordAccount[];
  private shops: Shop[];
  constructor(private socket: SocketsService, private router: Router) {
    this.users = [new ordAccount(0, "Dhmhtrhs"), new ordAccount(1, "Mpampos")]
    this.shops = [
      new Shop(0, "Gyrogwnia", 4.0, [
        new Rating(0, this.users[0], "Πολύ καλο και γρήγορο", 5.0),
        new Rating(0, this.users[1], "Good, but late!", 4.0),

      ]
      ),
      new Shop(0, "KRasas", 2.0, [
        new Rating(0, this.users[0], "Πολύ καλο και γρήγορο", 5.0),

      ]
      ),
      new Shop(0, "Xobolh", 4.0, [
        new Rating(0, this.users[0], "Πολύ καλο και γρήγορο", 5.0),
        new Rating(0, this.users[1], "Good, but late!", 4.0),

      ]
      ),
      new Shop(0, "Tu sifaliou th taverna", 5.0, [
        new Rating(0, this.users[0], "Πολύ καλο και γρήγορο", 5.0),
        new Rating(0, this.users[1], "Good, but late!", 4.0),

      ]
      ),

      new Shop(0, "Pita tou Papou", 5.0, [
        new Rating(0, this.users[0], "Πολύ καλο και γρήγορο", 5.0),
        new Rating(0, this.users[1], "Good, but late!", 4.0),
        // new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5

      ]
      )
    ]
  }



  ngOnInit() {
    this.socket.syncMessages("vote_ended").subscribe((data) => {
        this.router.navigateByUrl("/calories")
    })
  }

}


