import { Directive, ElementRef, Renderer,Input } from '@angular/core';

@Directive({
  selector: '[myVisibility]'
})
export class MyvisibilityDirective {

  constructor(public el: ElementRef, public renderer: Renderer) { 
  }
  @Input() myVisibility: boolean;

  ngOnInit(){
    if(this.myVisibility){
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}
