import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';

@Component({
  selector: 'ami-fullstack-voteres',
  templateUrl: './voteres.component.html',
  styleUrls: ['./voteres.component.scss']
})
export class VoteresComponent implements OnInit {
  shops:Shop[];
  constructor(private databank:DatabankService) { }

  ngOnInit() {
    this.shops=this.databank.getShops();
    
  }
  

}
