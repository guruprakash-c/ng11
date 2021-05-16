import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  constructor() {}
  contact = {
    name: '',
    email: '',
    message: ''
  };
  OnSubmit = (contact: any) => {
    debugger;
    alert('Thank you "' + contact.name + '", We will contact you asap.');
  };
  ngOnInit() {}
}
