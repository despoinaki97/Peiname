import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../global/services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ami-fullstack-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  constructor(private socket : SocketsService, private router:Router) { }

  ngOnInit() {
    
    const sub:Subscription = this.socket.syncMessages("host_proceed").subscribe((data) => {
      setTimeout(() => {
        sub.unsubscribe();
        this.router.navigateByUrl("/Rating_Shop_list")

      }, 5000);
    })

  }

}
