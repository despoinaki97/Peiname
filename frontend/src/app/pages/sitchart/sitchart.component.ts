import { Component, OnInit, SystemJsNgModuleLoader,ViewChild,ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from 'src/app/form-modal/form-modal.component';
import { Router } from '@angular/router';
import { DatabankService } from 'src/app/databank.service';
import { ordAccount } from 'src/app/ordaccount';
import { SocketsService } from 'src/app/global/services';
@Component({
  selector: 'app-sitchart',
  templateUrl: './sitchart.component.html',
  styleUrls: ['./sitchart.component.scss']
})
export class SitchartComponent implements OnInit {

  constructor( private modalform_serv:NgbModal,private router: Router , private DatabankService:DatabankService,private socket:SocketsService) { }

  ngOnInit() {
    this.seats = new Array<boolean>(false,false,false);
    this.populateButtons();
    this.socket.syncMessages('reload').subscribe(()=>{
      this.populateButtons();
    })
  }
  public users_local: ordAccount[];
  public seats : boolean[];

  openFormModal(x) {
    const modalRef = this.modalform_serv.open(FormModalComponent);
    
    modalRef.result.then((result) => {
      console.log(x,result);

      //database stuff here
      //add event here
      this.DatabankService.createUser(x,result.username,result.type == "Host"?true:false)
      this.DatabankService.update();
      this.DatabankService.call('reload',0);
      // this.DatabankService.call("start_voting",0)
      // this.router.navigateByUrl('/choosecuisine')

    }).catch((error) => {
      console.log(error);
    });
  }

  populateButtons(){
    this.DatabankService.update();
    this.DatabankService.getUsers().subscribe((users)=>{
      this.users_local = users;
      this.users_local.forEach((elem)=>{
        this.seats[elem.seat]= true;
        document.getElementById("b" + elem.seat).innerHTML= (elem.isHost?'[H]':'') +elem.name;
        // document.getElementById("b" + elem.seat).style.fontSize = '5vw';
        document.getElementById("b" + elem.seat).style.color = 'white';
        document.getElementById("b" + elem.seat).style.backgroundColor = elem.color;


      })
      console.log(this.seats);
    })
    
  }

  entername(){
    console.log("patithike");
       var butt : HTMLElement = document.getElementById('sofaseat') as HTMLElement;
       butt.style.color="red";
  }

}
