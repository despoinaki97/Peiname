import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes, useAnimation
  // ...
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { SocketsService } from '../global/services';
import { DatabankService } from '../databank.service';


@Component({
  selector: 'ami-fullstack-order-wait',
  templateUrl: './order-wait.component.html',
  styleUrls: ['./order-wait.component.scss'],
  animations: [

    trigger('moveBike', [
      state('true', style({
      })),
      state('false', style({
        marginLeft: '100vw'
      })),
      transition('false <=> true', [
        animate('{{left}}')
      ]),
    ])
  ]
})
export class OrderWaitComponent implements OnInit {
  public duration: any;
  public timeLeft: number;
  public min: number;
  public isActive = false;
  public hide: boolean;
  flag = false;
  interval;

  constructor(private activatedRoute: ActivatedRoute, private socket:SocketsService , private DatabankService:DatabankService) { }

  ngOnInit() {
    const min = +this.activatedRoute.snapshot.paramMap.get('min');

    this.hide = false;
    this.min = min;
    this.timeLeft = 59 * this.min;
    this.duration = this.min;
    this.startTimer();
  }

  startTimer() {
    this.isActive = true;
    this.interval = setInterval(() => {
      if (this.timeLeft % 60 == 0) {
        if (this.duration - 1 < 0)
          this.duration = 0;
        else
          this.duration--;
      }
      if (this.timeLeft > 0) {
        console.log(this.timeLeft);
        this.timeLeft--;
        if (!this.flag) {
          this.isActive = false;
          this.flag = true;
        }
        this.timeLeft = Math.ceil(this.timeLeft);

      } else {
        console.log("end");
        this.duration = "Ring Ring!";
        
        clearInterval(this.interval)
      }
    }, 1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

  animEnd(event) {
    if (this.flag) {
      this.hide = true;
      this.DatabankService.call('Final_Table',"");
      console.log("TELIOSA")
    }
    // do more stuff
  }

}


