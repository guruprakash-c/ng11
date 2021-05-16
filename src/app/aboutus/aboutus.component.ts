import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  constructor(private pgTitle: Title) {
    this.pgTitle.setTitle('About Us - Angular 10 Tutorials');
  }

  ngOnInit() {}
}
