import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../global/services';
import { Router } from '@angular/router';


@Component({
  selector: 'ami-fullstack-table-start',
  templateUrl: './table-start.component.html',
  styleUrls: ['./table-start.component.scss']
})
export class TableStartComponent implements OnInit {

  constructor(private Socket: SocketsService,private router:Router) { }

  ngOnInit() {
    this.Socket.syncMessages("start_voting").subscribe((data)=>{
      this.router.navigateByUrl("/table")
    })
    
    
  }

}
