import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { Rating } from '../../rating';
import { ordAccount } from '../../ordaccount';
import { DatabankService } from '../../databank.service';
import { Observable, of,Subscribable, Subscription } from 'rxjs';
import { SocketsService } from 'src/app/global/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  
  restaurants: Shop[] ;
  constructor(private DatabankService: DatabankService,private Socket:SocketsService,private router:Router) { }

  getShops(): void {
    this.restaurants = this.DatabankService.getShops()
  }

  ngOnInit() {
    document.getElementById("alert").style.display = 'none';
    this.getShops();
    
    let sub:Subscription = this.Socket.syncMessages("vote_ended").subscribe((data) => {
        document.getElementById("alert").style.display = 'block';
        console.log(data.message)
        sub.unsubscribe();
        if(data.message === 'rest'){
          setTimeout(() => {
            this.router.navigateByUrl("/tv-statistics-restaurant")
          }, 5000);
        }else{
          setTimeout(() => {
            this.router.navigateByUrl("/tv-statistics-cuisine")
          }, 5000);
        }
       
    })


    }

}
