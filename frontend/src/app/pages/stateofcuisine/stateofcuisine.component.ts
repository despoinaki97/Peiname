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



@Component({
  selector: 'ami-fullstack-stateofcuisine',
  templateUrl: './stateofcuisine.component.html',
  styleUrls: ['./stateofcuisine.component.scss']
})
export class StateofcuisineComponent implements OnInit {
  allUsers: ordAccount[];
  remaining: ordAccount[] = [];
  constructor(private router: Router, private DataBankService: DatabankService, @Inject(PLATFORM_ID) private plaformId: Object, private injector: Injector, private socket: SocketsService) { }

  ngOnInit() {
    let username = localStorage.getItem('username');
    let userSeat = localStorage.getItem('seat');
    this.DataBankService.getUsers().subscribe((users: ordAccount[]) => {
      this.allUsers = users
      users.forEach((elem) => {
        if (elem.name != username) {
          this.remaining.push(elem);
        } 
      })
    })
    this.socket.syncMessages("vote_done").subscribe((data) => {
      if (data.message != userSeat) {
        console.log(data.message, userSeat);
        this.change_load_status(data.message)
      }
    })
  }



  change_load_status(id: number) {
    var name = this.allUsers[id].name
    const loader = document.getElementById('loader_' + name);
    loader.style.display = 'none';
    const check: HTMLElement = document.getElementById('check_' + name);
    const label: HTMLElement = document.getElementById('label_' + name);
    label.style.paddingTop = '0';
    check.setAttribute("checked", "true");
    label.style.animation = 'bor 1s';
    label.style.animationFillMode = 'forwards';

  }
}


