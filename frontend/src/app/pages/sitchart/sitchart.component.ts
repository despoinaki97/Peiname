import { Component, OnInit, SystemJsNgModuleLoader,ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-sitchart',
  templateUrl: './sitchart.component.html',
  styleUrls: ['./sitchart.component.scss']
})
export class SitchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  entername(){
    console.log("patithike");
       var butt : HTMLElement = document.getElementById('sofaseat') as HTMLElement;
       butt.style.color="red";
  }

}
