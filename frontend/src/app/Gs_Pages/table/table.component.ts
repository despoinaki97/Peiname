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
  selector: 'ami-fullstack-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  closeResult: string;
  private modalComponent: NgbModal;
  users: ordAccount[];
  checked_users: number[];

  getUsers() {
    this.DataBankService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  constructor(private router: Router, private DataBankService: DatabankService, @Inject(PLATFORM_ID) private plaformId: Object, private injector: Injector, private socket: SocketsService) {
  }


  ngOnInit() {
    document.getElementById("alert").style.display = 'none';
    this.getUsers();
    this.init_checked_users();

    this.socket.syncMessages("vote_done").subscribe((data) => {
      this.change_load_status(data.message);
      this.checked_users[data.message] = 1;
      if (this.check_users()) {
        document.getElementById("alert").style.display = 'block';
        this.DataBankService.call("vote_ended",0);
        setTimeout(() => {
          this.router.navigateByUrl("/tableEndvote")
        }, 5000);
      }



    })

    // this.change_load_status(id);
    //this.DataBankService.addItem([this.users[0]],new Item("Pizza Margarita", 1, 1, 1, 1, 16, [], "Tomatoes sauce , cheese ,tomatoes"))
    // this.getUsers();

  }

  init_checked_users() {
    this.checked_users = new Array(this.users.length).fill(0);
    console.log(this.checked_users);
  }

  check_users(): boolean {
    let flag = 0;
    this.checked_users.forEach(element => {
      console.log(element)
      if (element === 0) {
        flag++;
      }
    })
    return flag == 0 ? true : false;

  }

  change_load_status(id: number) {
    var name = this.users[id].name
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
