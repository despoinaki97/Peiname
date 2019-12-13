import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { Router } from '@angular/router';


@Component({
  selector: 'ami-fullstack-tv-statistics-restaurant',
  templateUrl: './tv-statistics-restaurant.component.html',
  styleUrls: ['./tv-statistics-restaurant.component.scss']
})
export class TvStatisticsRestaurantComponent implements OnInit {

  constructor(private socket:SocketsService, private router:Router) {}

  ngOnInit() {
    this.socket.syncMessages('host_proceed').subscribe((data) => {
      this.router.navigateByUrl('/tv-payment')
    })
  }
}
