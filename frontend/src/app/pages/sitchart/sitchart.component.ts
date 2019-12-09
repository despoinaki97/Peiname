import { Component, OnInit, SystemJsNgModuleLoader, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from 'src/app/form-modal/form-modal.component';
import { Router } from '@angular/router';
import { DatabankService } from 'src/app/databank.service';
import { ordAccount } from 'src/app/ordaccount';
import { SocketsService } from 'src/app/global/services';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
@Component({
  selector: 'app-sitchart',
  templateUrl: './sitchart.component.html',
  styleUrls: ['./sitchart.component.scss']
})
export class SitchartComponent implements OnInit {

  constructor(private modalform_serv: NgbModal, private router: Router, private DatabankService: DatabankService, private socket: SocketsService) { }

  ngOnInit() {
    document.getElementById('alert').style.display = 'none';
    this.seats = new Array<boolean>(false, false, false);
    this.populateButtons();
    this.socket.syncMessages('reload').subscribe(() => {
      this.populateButtons();
    })
    this.socket.syncMessages('newUser').subscribe((data) => {
      console.log(data.message + "Logged in")
    })
  }
  public users_local: ordAccount[];
  public seats: boolean[];

  openFormModal(x) {
    const modalRef = this.modalform_serv.open(FormModalComponent);

    modalRef.result.then((result) => {
      localStorage.clear();
      // console.log(x, result);

      //database stuff here
      this.DatabankService.createUser(x, result.username, result.type == "Host" ? true : false)
      this.DatabankService.update();
      this.DatabankService.call('reload', 0);
      this.DatabankService.call('newUser', result.username);
    }).catch((error) => {
      console.log(error);
    });
  }

  populateButtons() {
    this.DatabankService.update();
    this.DatabankService.getUsers().subscribe((users) => {
      this.users_local = users;
      this.users_local.forEach((elem) => {
        this.seats[elem.seat] = true;
        document.getElementById("b" + elem.seat).innerHTML = (elem.isHost ? '[H]' : '') + elem.name;
        // document.getElementById("b" + elem.seat).style.fontSize = '5vw';
        document.getElementById("b" + elem.seat).style.color = 'white';
        document.getElementById("b" + elem.seat).style.backgroundColor = elem.color;
        if (this.check_seats()) {

          document.getElementById('alert').style.display = 'block';
          this.socket.syncMessages("start_voting").subscribe((data) => {
            this.router.navigateByUrl("/choosecuisine")
          })
          /*Waiting alert here for common users*/
          // console.error(elem.name + " is " + elem.isHost);
          if (localStorage.getItem("isHost") === "true") {
              this.router.navigateByUrl("/choosedirvote")
          }

        }

      })
      console.log(this.seats);
    })

  }

  check_seats(): boolean {
    let flag = 0;
    this.seats.forEach(element => {
      // console.log(element)
      if (element === false) {
        flag++;
      }
    })
    return flag == 0 ? true : false;

  }

}
