import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketsService } from '../global/services';

@Component({
  selector: 'ami-fullstack-table-vote-completed',
  templateUrl: './table-vote-completed.component.html',
  styleUrls: ['./table-vote-completed.component.scss']
})
export class TableVoteCompletedComponent implements OnInit {

  constructor(private router: Router,private socket:SocketsService) { }

  ngOnInit() {
    
    this.socket.syncMessages("host_proceed").subscribe((data)=>{
      this.router.navigateByUrl("/table/restaurant")
    })
    
  }

}
