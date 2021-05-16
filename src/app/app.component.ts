import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isAdded = randomVals(1, 6);
  currVal = 0;
  OnChange = (eve: any) => {
    this.currVal = parseInt(eve.target.value) + 1;
    return this.currVal;
  };
  OnBlur = (e: any)=>{
    if(e.target.value != undefined && e.target.value != null && e.target.value != ''){
      alert('You have entered '+e.target.value.length+' character(s). ');
    }
    else{
      e.target.focus();
    }
  };
}
let randomVals = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};
