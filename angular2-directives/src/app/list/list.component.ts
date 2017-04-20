
import {Component} from '@angular/core'
@Component({
    selector:'app-list',
    templateUrl: './list.component.html',
    styleUrls:['./list.component.css']
})
export class ListComponent {
    heroName = '';
    heros = [];

    onAddHero(){
        this.heros.push(this.heroName);
    }   
}
