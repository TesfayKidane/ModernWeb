import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <div>
      <button  (click) = "increase()">+</button>
      {{counterValue}}
      <button (click) = "decrease()">-</button>
   </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  
  counterValue : number;
  constructor() { 
    this.counterValue = 0 ;
  }

  increase(){
    this.counterValue += 1; 
    return false;
  }

  decrease(){
    this.counterValue -= 1;
    return false;
  }
  ngOnInit() {
  }

}
