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

  constructor(private http: HttpClient, private DatabankService: DatabankService) { }
  callServer(x) {
    this.event_json = {
      event: "vote_done",
      message: this.users[x].name
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.post('http://'+environment.host+'/api/example/sendMessageToClients', JSON.stringify(this.event_json), {
      headers: headers
    })
      .subscribe(data => {
        console.log(data);
      });
  }
  ngOnInit() {

    this.getUsers();
  }

}
