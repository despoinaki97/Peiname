import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/databank.service';
import { Router } from '@angular/router';
import { LeapService ,Gestures} from 'src/app/cursor/leap.service';

@Component({
  selector: 'ami-fullstack-choosecuisine',
  templateUrl: './choosecuisine.component.html',
  styleUrls: ['./choosecuisine.component.scss']
})
export class ChoosecuisineComponent implements OnInit {

  constructor( private DatabankService: DatabankService,private router:Router,private _leapService:LeapService) { }

  callServer(){
    this.DatabankService.call('vote_done',localStorage.getItem("username"));
    this.DatabankService.updateUserinDB({
      hasVotedCuisine: true
    })
    this.router.navigateByUrl("/stateofcuisine");
  }


  ngOnInit() {
    this._leapService.gestureRecognizer().subscribe((gesture)=>{
      if(gesture == Gestures.SWIPE_UP){
        console.log('swipe up cuis');
        document.getElementById('scroll').scrollTo(0, 40);

            }
    });
  }
}
