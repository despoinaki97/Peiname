import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { LeapService,Gestures} from 'src/app/cursor/leap.service';
@Component({
  selector: 'ami-fullstack-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  constructor(private _leapService:LeapService) { }

  ngOnInit() {
    this._leapService.gestureRecognizer().subscribe((gesture)=>{
      if(gesture == Gestures.CIRCLE_CLOCKWISE){
        console.log('swipe up tv');
        document.getElementById('scroll').scrollTo(0, 100);
        document.getElementById('Welcome').style.color='red';
      }
    });
  }

}
