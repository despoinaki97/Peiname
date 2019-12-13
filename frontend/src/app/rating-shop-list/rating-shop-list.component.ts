import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { Rating } from '../rating';
import { ordAccount } from '../ordaccount';
import { DatabankService } from '../databank.service';
import { LeapService,Gestures} from 'src/app/cursor/leap.service';


@Component({
  selector: 'ami-fullstack-rating-shop-list',
  templateUrl: './rating-shop-list.component.html',
  styleUrls: ['./rating-shop-list.component.scss']
})
export class RatingShopListComponent implements OnInit {
  users: ordAccount[];
  Shops;
  constructor(private databank:DatabankService,private _leapService:LeapService) {
   
  }

  ngOnInit() {
    this.databank.getUsers().subscribe((users)=>{
      this.users = users;

      
    });

    var sub = this._leapService.gestureRecognizer().subscribe((gesture)=>{
      if(gesture == Gestures.SWIPE_RIGHT){
        console.log('swipe left tv');
        document.getElementById('horscroll').scrollTo(1000, 0);
    //    document.getElementById('Welcome').style.color='blue';
      } if(gesture == Gestures.SWIPE_LEFT){
        console.log('swipe left tv');
        document.getElementById('horscroll').scrollTo(-1000, 0);
    //    document.getElementById('Welcome').style.color='blue';
      }
   
    });

    console.log(this.users);


    this.Shops = [
      new Shop(0,"Gyrogonia",4.3,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
        new Rating(0,this.users[0],"Μεγάλη ποικιλία :) ",4)
      ],"","","../../../assets/images/Rectangle 2.2 (3).png"
      ),
      new Shop(0,"Krasas",4.1,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
  
      ],"","", "../../../assets/krassas.webp"
      ),
      new Shop(0,"Xovoli",4.0,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
  
      ],"","","../../../assets/images/Rectangle 2.2 (4).png"
      ),
      new Shop(0,"Ta aderfia",5.0,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
        new Rating(0,this.users[2],"Πολύ καλο και γρήγορο",5.0),

      ],"","","./../../assets/aderfia.webp"
      ),
  
      new Shop(0,"Pita tou Papou",4.6,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
        // new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
  
      ],"","","./../../assets/images/Rectangle 2.2 (2).png"
      )    ,
      
      new Shop(0,"Magevmata",4.3,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
        // new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
  
      ],"","","../../../assets/images/Rectangle 2.2 (1).png"
      )    ,
      
      new Shop(0,"Pansetomprizoladiko",4.5,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
        // new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
  
      ],"","","./../../assets/panse.webp"
      )    ,
      
      new Shop(0,"Ntelogo",3.9,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
        // new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
        new Rating(0,this.users[2],"Πολύ καλο και γρήγορο",5.0),

      ],"","","./../../assets/ntelogo.webp"
      )    ,
      new Shop(0,"Plateia",5.0,[
        new Rating(0,this.users[0],"Πολύ καλο και γρήγορο",5.0),
        new Rating(0,this.users[1],"Good, but late!",4.0),
        // new Rating(0,new ordAccount("Despoina.G"),"Κακο",2.0) // cannot support *.5
  
      ],"","","./../../assets/πλατεια.webp"
      )    ,
    ]


  }

  
 
}


