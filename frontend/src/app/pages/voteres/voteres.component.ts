import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/databank.service';
import { Shop } from 'src/app/shop';
import { Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-voteres',
  templateUrl: './voteres.component.html',
  styleUrls: ['./voteres.component.scss']
})
export class VoteresComponent implements OnInit {
  shops:Shop[];
  foundshop:boolean=false;
  constructor(private databank:DatabankService,private router: Router) { }

  ngOnInit() {
    this.shops=this.databank.getShops();
    
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
