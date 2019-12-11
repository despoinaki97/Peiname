import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { Rating } from '../rating';
import { ordAccount } from '../ordaccount';
import { DatabankService } from '../databank.service';


@Component({
  selector: 'ami-fullstack-rating-shop-list',
  templateUrl: './rating-shop-list.component.html',
  styleUrls: ['./rating-shop-list.component.scss']
})
export class RatingShopListComponent implements OnInit {
  users: ordAccount[];
  Shops;
  constructor(private databank:DatabankService) {
   
  }

  ngOnInit() {
    this.databank.getUsers().subscribe((users)=>{
      this.users = users;
      
    });

    console.log(this.users);


    this.Shops = [
      new Shop(0,"Gyrogwnia",4.0,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
  
      ]
      ),
      new Shop(0,"KRasas",2.0,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
  
      ]
      ),
      new Shop(0,"Xobolh",4.0,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
  
      ]
      ),
      new Shop(0,"Tu sifaliou th taverna",5.0,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
  
      ]
      ),
  
      new Shop(0,"Pita tou Papou",5.0,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
        // new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
  
      ]
      )    
    ]


  }

  
 
}


