import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';
import { SmartSpeakerService } from 'src/app/smart-speaker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostchoosestore',
  templateUrl: './hostchoosestore.component.html',
  styleUrls: ['./hostchoosestore.component.scss']
})
export class HostchoosestoreComponent implements OnInit {
  shops:Shop[];
  constructor(private databank:DatabankService,private router: Router ,private _smartSpeaker:SmartSpeakerService) { }

  ngOnInit() {
    this.shops=this.databank.getShops();
    var that =this;
      this._smartSpeaker.addCommand( ["we are ready to order"], function(){ 
      that._smartSpeaker.speak("Hey buddy ! How are you today?");
      that.router.navigate(['/restmenu/Krassas']);

    });
  }

}
