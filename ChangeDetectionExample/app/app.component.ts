import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-root',
  template: `
    <h1>Change Detection Example</h1>
    <button type="button" (click)="changePersonProperties()">
      Change Person Properties
    </button>
    <button type="button" (click)="changePersonObject()">
      Change Person Object
    </button>
    <br><br>
    Parent Person Object: {{person.name}}
    <br>
    <app-person [person]="person" ></app-person>`,

})
export class AppComponent {

  person = new Person('Asaad Saad');

  changePersonProperties(): void {
    this.person.name = this.makeRandonString();
    console.log(this.person);
  }
  
  changePersonObject(): void {
    this.person = new Person(this.makeRandonString());
    console.log(this.person);
  }


  makeRandonString(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
