import { Component } from '@angular/core';
import { SocketsService } from './global/services';
import { ngModuleJitUrl } from '@angular/compiler';

@Component({
  selector: 'ami-fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private socketsService: SocketsService) {
    // Connect to sockets server on startup
    this.socketsService.initAndConnect();

    document.getElementById('loading').style.display = 'none';


    //How to consume an event
    this.socketsService.syncMessages('test').subscribe((data)=>{
      console.log('The message i received for this event is: ', data);
    });
    
  }

  

  
}



