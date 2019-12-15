import { Component, OnInit, Inject, PLATFORM_ID, Injector } from '@angular/core';
import { Shop } from 'src/app/shop';
import { Rating } from 'src/app/rating';
import { ordAccount } from 'src/app/ordaccount';
import { Item } from 'src/app/item';
import { DatabankService } from 'src/app/databank.service';
import { ThrowStmt, analyzeAndValidateNgModules } from '@angular/compiler';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SocketsService } from '../../global/services';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'ami-fullstack-bill-managment',
  templateUrl: './bill-managment.component.html',
  styleUrls: ['./bill-managment.component.scss']
})
export class BillManagmentComponent implements OnInit {

  closeResult: string;
  i: number;
  public finished:number = 0;
  public choosed_for_treat: ordAccount[] =[];
  public choosed_user1:boolean = false;
  public choosed_user2:boolean = false;
  public remainusers:ordAccount[] = [];
  private modalComponent: NgbModal;
  users: ordAccount[];
  public Users: ordAccount[];
  public Items: Item[][] = [];
  public cart: {
    quantity: number,
    item: Item
  }[][]

  //open: boolean = false;

  getUsers() {
    this.DataBankService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  constructor(private DataBankService: DatabankService,@Inject(PLATFORM_ID) private plaformId:Object,private injector: Injector,private router:Router, private socket:SocketsService) {
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
  getName() {
    return localStorage.getItem('username')
  }
  getLength() {

    return this.Items[+localStorage.getItem("seat")].length;
  }
  getSeat() {
    return +localStorage.getItem("seat");
  }
  getTotalPrice(x:number): number {
    let sum = 0;
    if (this.Items[x]) {
      this.Items[x].forEach((each: Item) => {
        sum += each.price
      })
    }
    return +sum.toFixed(2);
  }

  updateCarts() {
    this.Items = [];
    this.cart = [];
    for (let i: number = 0; i < 3; i++) {
      this.Items[i] = [];
      this.cart[i] = [];
    }
    this.DataBankService.getUsersOrderedItems((item, user) => {

      // console.log(item, user);
      this.Items[user.seat].push(item)
      this.checkDouble(user.seat, item);
    })

  }
  checkDouble(seat, item) {
    let result = false;
    this.cart[seat].forEach(each => {
      if (each.item.name == item.name) {
        each.quantity++;
        result = true;
      }
    })
    if (result === false) {
      this.cart[seat].push({
        quantity: 1,
        item: item
      })
    }
  }

  Choosed_for_treat(choosed:boolean){
    console.log(choosed)
      if(choosed == true){
      document.getElementById("Other_Users").style.backgroundColor = '#FFDB7E';
      }
      else{
        document.getElementById("Other_Users").style.backgroundColor = "#FFFDF9";
      }
      this.choosed_user1 = !this.choosed_user1;
  }

  Choosed_for_treat2(choosed:boolean){
    console.log(choosed)
      if(choosed == true){
      document.getElementById("Other_Users2").style.backgroundColor = '#FFDB7E';
      }
      else{
        document.getElementById("Other_Users2").style.backgroundColor = "#FFFDF9";
      }
      this.choosed_user2 = !this.choosed_user2;

    }
    
    Treat_someone(){
      this.users.forEach( (user) =>{
        if(user.seat == +localStorage.getItem('seat')) this.choosed_for_treat.push(user);
      })
      if(this.choosed_user1 == true) this.choosed_for_treat.push(this.remainusers[0]);
      if(this.choosed_user2 == true) this.choosed_for_treat.push(this.remainusers[1]);

      if(this.choosed_for_treat){
        var total_tpm = 0;
        var total = this.getTotalPrice(this.getSeat());
        this.choosed_for_treat.forEach( (elem) =>{
          total_tpm += this.getTotalPrice( elem.seat);
        })
        
      total += total_tpm;
      document.getElementById("Total_Price").innerHTML = total.toPrecision(2) + '€';
      }
      this.DataBankService.call("treat" , this.choosed_for_treat);
      
    }

    Pay(){
      if(this.choosed_for_treat.length != 0){
        console.log("TRUE");
      this.finished += this.choosed_for_treat.length;
      }
      else {
        console.log(this.finished + " FINISHED")
        this.finished = this.finished + 1;
      }
      
      if( this.finished == this.users.length){
        this.DataBankService.call("finished","")
      }

      else{
        this.DataBankService.call("user_finished",this.finished);
        this.router.navigateByUrl("idle/Order completed!")
      }

    }

    

  ngOnInit() {
    this.getUsers();
    this.DataBankService.getUsers().subscribe((users) => {
      users.forEach((each) => {
        if (each.seat != this.getSeat()) this.remainusers.push(each)
      })
    })
  
    this.socket.syncMessages('treat').subscribe((data) => {
      data.message.forEach(user => {
        if(user.seat === +localStorage.getItem('seat') && data.message[0].seat !== +localStorage.getItem('seat')){
           var to:string;
           to = "treated/" + data.message[0].name;
            this.router.navigateByUrl(to);
        }
      });
        
      });
      this.socket.syncMessages('finished').subscribe(( data) =>{
        this.router.navigateByUrl("idle/Order completed!")
      })

      this.socket.syncMessages('user_finished').subscribe(( data) =>{
        console.log(data.message + "DATA MESSAGE")
        this.finished = data.message;
      })

    this.i = 0;
    this.updateCarts();
    this.socket.syncMessages('update_cart').subscribe((data) => {
      this.updateCarts();
    })

}

}