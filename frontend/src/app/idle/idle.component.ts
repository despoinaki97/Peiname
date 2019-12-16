import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/shop';
import { DatabankService } from 'src/app/databank.service';
import { Item } from 'src/app/item';
import { element } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import { SocketsService } from '../global/services';
import { Subscription } from 'rxjs';
import { SmartSpeakerService } from '../smart-speaker.service';



@Component({
  selector: 'ami-fullstack-idle',
  templateUrl: './idle.component.html',
  styleUrls: ['./idle.component.scss']
})
export class IdleComponent implements OnInit {

  constructor(private speaker:SmartSpeakerService ,private socket:SocketsService,private databank:DatabankService,private router: Router,private activatedRoute: ActivatedRoute) { }
  public name:string;
  ngOnInit() {

    
    this.name = this.activatedRoute.snapshot.paramMap.get('name');   
    const sub:Subscription =this.socket.syncMessages('start_voting').subscribe((value)=>{
      sub.unsubscribe();
      this.router.navigateByUrl('/tv')
    })

      this.socket.syncMessages('Final_Table').subscribe((value)=>{
        if(this.name == 'table'){
          console.log("PREPEI NA ALAKSW")
          this.router.navigateByUrl("Final-table");
        }
    })
    }
}
