import { Component, OnInit } from '@angular/core';
import { SocketsService } from './global/services';
import { ngModuleJitUrl } from '@angular/compiler';
import { Router } from '@angular/router';
import { SmartSpeakerService } from './smart-speaker.service';

@Component({
  selector: 'ami-fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private socketsService: SocketsService,private router: Router ,private _smartSpeaker:SmartSpeakerService
    ) {
    // Connect to sockets server on startup
    this.socketsService.initAndConnect();

    document.getElementById('loading').style.display = 'none';


    //How to consume an event
    this.socketsService.syncMessages('test').subscribe((data)=>{
      console.log('The message i received for this event is: ', data);
    });

    
  }

    ngOnInit(){
      var that =this;
      this._smartSpeaker.addCommand( ["Let's eat","good morning","hey"], function(){ 
      that._smartSpeaker.speak("Hey buddy ! How are you today?");
      that.router.navigate(['/tv']);

    });
    this._smartSpeaker.addCommand( ["show me cuisine statistics"], function(){ 
      that._smartSpeaker.speak("Hey buddy ! How are you today?");
      that.router.navigate(['/tv-statistics-cuisine']);

    });
    this._smartSpeaker.addCommand( ["show me restaurant votes"], function(){ 
      that._smartSpeaker.speak("Hey buddy ! How are you today?");
      that.router.navigate(['/table']);

    });
  }
  
}



