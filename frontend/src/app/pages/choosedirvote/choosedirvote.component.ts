import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabankService } from 'src/app/databank.service';
import { ordAccount } from 'src/app/ordaccount';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-choosedirvote',
  templateUrl: './choosedirvote.component.html',
  styleUrls: ['./choosedirvote.component.scss']
})
export class ChoosedirvoteComponent implements OnInit {
  public users: ordAccount[];
  public event_json;
  getUsers(): void {
    this.DatabankService.getUsers().subscribe((element) => {
      this.users = element;
    })
  }

  constructor( private DatabankService: DatabankService) { }
  callServer(event,message){
    this.DatabankService.call(event,message);
  }

  ngOnInit() {
    this.getUsers();
  }

}
