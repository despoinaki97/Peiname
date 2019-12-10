import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/databank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-choosecuisine',
  templateUrl: './choosecuisine.component.html',
  styleUrls: ['./choosecuisine.component.scss']
})
export class ChoosecuisineComponent implements OnInit {

  constructor( private DatabankService: DatabankService,private router:Router) { }

  callServer(){
    this.DatabankService.call('vote_done',localStorage.getItem("username"));
    this.DatabankService.updateFieldinDB({
      hasVotedCuisine: true
    })
    this.router.navigateByUrl("/stateofcuisine");
  }

  ngOnInit() {
  }

}
