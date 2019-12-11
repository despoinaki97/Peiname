import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { LeapService,Gestures} from 'src/app/cursor/leap.service';
@Component({
  selector: 'ami-fullstack-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  constructor(private _leapService:LeapService) {
  
   }

  ngOnInit() {
   

    var sub = this._leapService.gestureRecognizer().subscribe((gesture)=>{
      if(gesture == Gestures.SWIPE_LEFT){
        console.log('swipe left tv');
      //  document.getElementById('scroll').scrollTo(0, 80);
        document.getElementById('Welcome').style.color='blue';
      }
    });


    this._leapService.gestureRecognizer().subscribe((gesture1)=>{
      if(gesture1 == Gestures.SWIPE_UP){
        console.log('swipe up tv');
        document.getElementById('scroll').scrollTo(0, 60);
        document.getElementById('Welcome').style.color='red';

      }
    });


    
  }
  
   
  

}
