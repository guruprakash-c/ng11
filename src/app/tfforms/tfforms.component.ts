import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tfforms',
  templateUrl: './tfforms.component.html',
  styleUrls: ['./tfforms.component.css']
})
export class TFFormsComponent implements OnInit {
  fname: string = '';
  constructor() {}

  ngOnInit() {}
  saveForm = (dtls: NgForm) => {
    if (dtls !== null) {
      alert('Hi ' + dtls.value.fname + ', You are registered.');
    }
  };
  reloadform = (d: NgForm) => {
    // d.reset();
    d.resetForm();
  };
  loadform = (d: NgForm) => {
    let userData = {
      fname: 'Vinay'
    };
    d.setValue(userData);
  };
}
