import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'headersec',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor() {}
  userType = 'Publisher';
  menuItems = [
    {
      home: {
        link: '/home',
        textToDisplay: 'Home',
        isActive: false,
        hasChild: false
      },
      about: {
        link: '/about',
        textToDisplay: 'About Us',
        isActive: false,
        hasChild: false
      },
      blog: {
        link: '/blog',
        textToDisplay: 'Blog Posts',
        isActive: false,
        hasChild: true
      }
    }
  ];
  ngOnInit() {}
  ngOnChanges() {}
}
