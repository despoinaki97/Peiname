import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'ami-fullstack-stateofcuisine',
  templateUrl: './stateofcuisine.component.html',
  styleUrls: ['./stateofcuisine.component.scss']
})
export class StateofcuisineComponent implements OnInit {

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
