import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';

@Component({
  selector: 'app-hostchoosestore',
  templateUrl: './hostchoosestore.component.html',
  styleUrls: ['./hostchoosestore.component.scss']
})
export class HostchoosestoreComponent implements OnInit {
  shops:Shop[];
  constructor(private databank:DatabankService) { }

  ngOnInit() {
    this.shops=this.databank.getShops();
    
  }

}
