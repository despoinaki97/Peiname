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
  selector: 'ami-fullstack-stateofrest',
  templateUrl: './stateofrest.component.html',
  styleUrls: ['./stateofrest.component.scss']
})
export class StateofrestComponent implements OnInit {

  allUsers: ordAccount[];
  public remaining: ordAccount[] = [];
  constructor(private router: Router, private DataBankService: DatabankService, @Inject(PLATFORM_ID) private plaformId: Object, private injector: Injector, private socket: SocketsService) {
    let username = localStorage.getItem('username');
    this.DataBankService.getUsers().subscribe((users) => {
      users.forEach((each) => {
        if (each.name != username && this.remaining.length < 2) this.remaining.push(each)
      })
    })
  }

  ngOnInit() {
    let username = localStorage.getItem('username');
    this.socket.syncMessages("vote_ended").subscribe((data) => {
      if (localStorage.getItem('isHost') === 'true') {
        const waitlbl: HTMLElement = document.getElementById('wait');
        const continueButton: HTMLElement = document.getElementById('continue');
        continueButton.style.display = 'block';
        waitlbl.innerHTML = ''
      }
    })
    this.DataBankService.getUsers().subscribe((users) => {
      users.forEach((each) => {
        // this.uncheck_change_load_status(each);
        if (each.hasVotedRestaurant && each.name != username && this.remaining.length < 2) this.remaining.push(each)
      })
    })
    console.log(this.remaining)
    this.socket.syncMessages("host_proceed").subscribe((data) => {
      this.router.navigateByUrl("/restmenu/Krassas")
    })

    this.socket.syncMessages("vote_done").subscribe((data) => {
      this.DataBankService.getUsers().subscribe((users) => {
        users.forEach((each) => {
          if (each.hasVotedRestaurant && each.name != username) {
            
            this.change_load_status(each)
          }

        })
      })
    })

    window.onload = () => {
      this.DataBankService.call('vote_done', localStorage.getItem("id"));
    }
  }

  proceedToVoteforRestaurants() {
    this.DataBankService.call('host_proceed', "restaurant");
    // this.DataBankService.call('host_proceed_rest', 0);
    
  }


  change_load_status(user: ordAccount) {
    console.log(user.name + '_change_load_status')
    // if (user.seat != +localStorage.getItem('seat')) {
    var name = user.name
    const loader = document.getElementById('loader_rest_' + name);
    loader.style.display = 'none';
    const check: HTMLElement = document.getElementById('check_rest_' + name);
    const label: HTMLElement = document.getElementById('label_rest_' + name);
    label.style.paddingTop = '0';
    check.setAttribute("checked", "true");
    label.style.animation = 'bor 1s';
    label.style.animationFillMode = 'forwards';
    // }
  }
  uncheck_change_load_status(user: ordAccount) {
    console.log(user.name + '_change_load_status')
    // if (user.seat != +localStorage.getItem('seat')) {
    var name = user.name
    const loader = document.getElementById('loader_rest_' + name);
    loader.style.display = 'block';
    const check: HTMLElement = document.getElementById('check_rest_' + name);
    const label: HTMLElement = document.getElementById('label_rest_' + name);
    // label.style.paddingTop = '0';
    check.setAttribute("checked", "false");
    // label.style.animation = 'bor 1s';
    // label.style.animationFillMode = 'forwards';
    // }
  }


}