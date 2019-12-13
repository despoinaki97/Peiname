import { Component, OnInit, Inject, PLATFORM_ID, Injector } from '@angular/core';
import { Shop } from 'src/app/shop';
import { Rating } from 'src/app/rating';
import { ordAccount } from 'src/app/ordaccount';
import { Item } from 'src/app/item';
import { DatabankService } from 'src/app/databank.service';
import { ThrowStmt, analyzeAndValidateNgModules } from '@angular/compiler';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';
import { SocketsService } from 'src/app/global/services';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'ami-fullstack-voteres',
  templateUrl: './voteres.component.html',
  styleUrls: ['./voteres.component.scss']
})
export class VoteresComponent implements OnInit {
  shops:Shop[];
  foundshop:boolean=false;
  constructor(private router: Router, private DataBankService: DatabankService, @Inject(PLATFORM_ID) private plaformId: Object, private injector: Injector, private socket: SocketsService) { }

  ngOnInit() {
    this.shops=this.DataBankService.getShops();
    
  }
  
  gotokrassas(){
    this.shops.forEach(element=>{
        if(element.name=="Krassas")
          return this.foundshop=true;
    });  
    if(this.foundshop==true)
      this.router.navigate(['/restmenu']);
}


callServer(){
  this.DataBankService.call('vote_done',localStorage.getItem("username"));
  this.DataBankService.updateUserinDB({
    hasVotedRestaurant: true
  })
    this.router.navigateByUrl("/stateofrest");
  }


}
