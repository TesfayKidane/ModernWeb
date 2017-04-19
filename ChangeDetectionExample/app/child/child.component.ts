import { Component, ChangeDetectionStrategy  } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-person',
  template: `
    <br>
    Child Person Object: {{person.name}}
    <br>
    `,
  inputs: ['person'],
  //changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ChildComponent  {
  person: Person;

  ngOnChanges(inputChanges){
    if (inputChanges.person) console.info('Person is Changed!');
  }

}
