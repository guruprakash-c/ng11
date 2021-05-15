import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isAdded = randomVals(1,6);
}
let randomVals = (min,max) => {
  return Math.ceil(Math.random() * (max - min) + min);
}
