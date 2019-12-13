import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-tv-statistics-cuisine',
  templateUrl: './tv-statistics-cuisine.component.html',
  styleUrls: ['./tv-statistics-cuisine.component.scss']
})
export class TvStatisticsCuisineComponent implements OnInit {

  constructor(private socket : SocketsService,private router:Router) { }

  ngOnInit() {
    this.socket.syncMessages('vote_ended').subscribe((data) => {
      this.router.navigateByUrl('/tv-statistics-restaurant')
    })
  }

}
