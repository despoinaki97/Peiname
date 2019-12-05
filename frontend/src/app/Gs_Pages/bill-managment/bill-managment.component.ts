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
  selector: 'ami-fullstack-bill-managment',
  templateUrl: './bill-managment.component.html',
  styleUrls: ['./bill-managment.component.scss']
})
export class BillManagmentComponent implements OnInit {

  closeResult: string;
  i: number;
  private modalComponent: NgbModal;
  users: ordAccount[];

  getUsers() {
    this.DataBankService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  constructor(private DataBankService: DatabankService,@Inject(PLATFORM_ID) private plaformId:Object,private injector: Injector) {
    if(isPlatformBrowser(this.plaformId)){
      this.modalComponent = this.injector.get(NgbModal);
    }
   }

  open(content) {
    this.modalComponent.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.i = 0;
    this.getUsers();
    //this.DataBankService.addItem([this.users[0]],new Item("Pizza Margarita", 1, 1, 1, 1, 16, [], "Tomatoes sauce , cheese ,tomatoes"))
    // this.getUsers();
    // [new Item("Caesar Salad", 1, 1, 1, 1, 9, [new ordAccount("Despoina"), new ordAccount("Kwstas")], "Tomatoes sauce , cheese ,tomatoes"),
    // new Item("Pizza Margarita", 1, 1, 1, 1, 16, [new ordAccount("Despoina")], "Tomatoes sauce , cheese ,tomatoes"),
    // new Item("Pizza anana", 1, 1, 1, 1, 8.5, [], "Tomatoes sauce , cheese ,tomatoes,blah, blah,ananna")
    // ]

  }
  
}
