import {Component} from '@angular/core'

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls:['./hero.component.css']
})
export class HeroComponent{

    heroId = 0; 
    constructor(){
       this.heroId = Math.random()*100;
    }
    getColor(){
        return this.heroId > Math.random()*100 ? 'green' : 'red';
    }
}