import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'ami-fullstack-restaurant-vote-results',
  templateUrl: './restaurant-vote-results.component.html',
  styleUrls: ['./restaurant-vote-results.component.scss']
})
export class RestaurantVoteResultsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.router.navigateByUrl("/idle/table")
    }, 5000);
  }

  }
