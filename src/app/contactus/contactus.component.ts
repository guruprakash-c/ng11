import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppSvcHandler } from './app-service-handler';
import { of } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  postArr: any=[];
  posts$: Observable<Object>;
  errMsg: string;
  constructor(private pgTitle: Title, private appSvc: AppSvcHandler) {
    this.pgTitle.setTitle('Contact Us - Angular 10 Tutorials');
    // this.posts$ = this.appSvc.getPosts().pipe(
    //   catchError(err => {
    //     this.errMsg = err.message;
    //     return of([]);
    //   })
    // );
  }
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
