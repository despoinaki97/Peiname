import { Component, OnInit, Inject, PLATFORM_ID, Injector } from '@angular/core';
import { Shop } from 'src/app/shop';
import { Rating } from 'src/app/rating';
import { ordAccount } from 'src/app/ordaccount';
import { Item } from 'src/app/item';
import { DatabankService } from 'src/app/databank.service';
import { ThrowStmt, analyzeAndValidateNgModules } from '@angular/compiler';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'ami-fullstack-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  closeResult: string;
  private modalComponent: NgbModal;
  users: ordAccount[];

  getUsers() {
    this.DataBankService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  constructor(private DataBankService: DatabankService,@Inject(PLATFORM_ID) private plaformId:Object,private injector: Injector) {
   }
  

  ngOnInit() {
    this.getUsers();
    // this.change_load_status(id);
    //this.DataBankService.addItem([this.users[0]],new Item("Pizza Margarita", 1, 1, 1, 1, 16, [], "Tomatoes sauce , cheese ,tomatoes"))
    // this.getUsers();

  }

  change_load_status(id:string){
   const loader = document.getElementById('loader_'+id);
   loader.style.display= 'none';
   const check:HTMLElement = document.getElementById('check_'+id);
   const label:HTMLElement = document.getElementById('label_'+id);
   label.style.paddingTop='0';
   check.setAttribute("checked","true");
   label.style.animation = 'bor 1s';
   label.style.animationFillMode = 'forwards';
    
  }

}
