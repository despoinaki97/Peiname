import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-stateofrest',
  templateUrl: './stateofrest.component.html',
  styleUrls: ['./stateofrest.component.scss']
})
export class StateofrestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changestate1(){
    var load=document.getElementById('checkicon1');

    var spinner = document.getElementById('loader1'); 
    spinner.parentNode.removeChild(spinner); 
    
    load.style.display="inline";
    

  }

  changestate2(){
    var load=document.getElementById('checkicon2');

    var spinner = document.getElementById('loader2'); 
    spinner.parentNode.removeChild(spinner); 
    
    load.style.display="inline";
    

  }
}
