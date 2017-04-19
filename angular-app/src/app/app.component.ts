import { Directive,Component } from '@angular/core';
import { CounterComponent } from './counter.component';
@Component({
  selector: 'app-root',
  template: `
    <div class="parent">
      <h1>Parent App</h1>
      <p>Value entered in child comp : {{childValue}} </p>
      <input type="text" #parentInput (keyup)="0"><br>
      <app-counter [parentValue]="parentInput.value" (counterChanged)="childValue = $event"></app-counter>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  childValue : string;
}


