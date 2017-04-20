import { Component,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <div class="child">
      <h1>Child</h1>
      <div class="counter">
      <button  (click) = "increase()">+</button>
      <input #counterInput (input)="onChange(counterInput.value)" value={{counterValue}}>
      <button (click) = "decrease()">-</button>
      <p>Value from in parent component: {{parentValue}}</p>
      </div>
   </div>
  `,
  inputs : ['parentValue'],
  outputs : ['counterChanged']
  ,
  styles: ['div.child {margin: 10px; background-color:gray; border:1px solid black; color: white; width:300px; height: 150px;} h1{ padding : 2px;} .counter{padding:5px;}']

})  
export class CounterComponent{
  counterChanged = new EventEmitter<string>();
  parentValue : number;
  counterValue : number;
  constructor() { 
    this.counterValue = 0 ;
  }
  onChange(value:string){
    this.counterChanged.emit(value);
  }
  increase(){
    this.counterValue += 1; 
    return false;
  }

  decrease(){
    this.counterValue -= 1;
    return false;
  }
}
