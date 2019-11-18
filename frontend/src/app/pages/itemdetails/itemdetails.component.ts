import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  showModal(): void {   
    this.skat=true;
    // communication to show the modal, I use a behaviour subject from a service layer here
}


  
}






