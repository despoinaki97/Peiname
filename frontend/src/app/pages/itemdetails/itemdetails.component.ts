import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'ami-fullstack-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss']
})
export class ItemdetailsComponent implements OnInit {
  closeResult: string;
  skat:boolean;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  showModal():void {
    $('#myModal').appendTo("body") ;
  }



  
}






