import { Component } from '@angular/core';

@Component({
  selector: 'app-comp4',
  template: `
  <h1>Component 4:</h1>
    <p>Two-way Data Binding:</p>
    <p>Message: {{message}}</p>
    <input value="{{message}}" [(ngModel)]="message" /><br>
    <input [ngModel]="message" (ngModelChange)="message=$event"><br>
    <input [value]="message" (input)="message=$event.target.value">
  `
})
export class Comp4Component {
    public message: string = 'Default Message';
}
