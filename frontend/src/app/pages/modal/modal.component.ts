import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// This lets me use jquery
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
   
  }
  
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }

   printhey():void{
    $("#usershare").click(function () {
      $(this).toggleClass("green");
   });
        //  document.getElementById('usershare').style.background='#FFDB7E';
  }
  printhey2():void{
    document.getElementById('usershare2').style.background='#FFDB7E';
}
}