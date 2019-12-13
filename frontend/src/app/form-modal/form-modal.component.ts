import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ami-fullstack-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  myForm: FormGroup;
  default = 'Not-Host'
  constructor( public activeModal: NgbActiveModal,private formBuilder: FormBuilder) { 
    this.createForm();

  }
  ngOnInit() {
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      type: ''
    });
    this.myForm.controls['type'].setValue(this.default, {onlySelf: true});
  }

   private submitForm() {
    this.activeModal.close(this.myForm.value);
  }
  // name
}
