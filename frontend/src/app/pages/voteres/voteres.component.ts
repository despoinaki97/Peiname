import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';
import { Router } from '@angular/router';
import { SmartSpeakerService } from 'src/app/smart-speaker.service';

@Component({
  selector: 'ami-fullstack-voteres',
  templateUrl: './voteres.component.html',
  styleUrls: ['./voteres.component.scss']
})
export class VoteresComponent implements OnInit {
  shops:Shop[];
  foundshop:boolean=false;
  constructor(private databank:DatabankService,private router: Router ,private _smartSpeaker:SmartSpeakerService) { }

  ngOnInit() {
    this.shops=this.databank.getShops();
    
    var that =this;
 
  this._smartSpeaker.addCommand( ["hello","good morning","hey"], function(){ 
    that._smartSpeaker.speak("Hey buddy ! How are you today?");
  }); // Add the command with addCommands method. Now
  
  }
  


  gotokrassas(){
    this.shops.forEach(element=>{
        if(element.name=="Krassas")
          return this.foundshop=true;
    });  
    if(this.foundshop==true)
      this.router.navigate(['/restmenu']);
}

}
