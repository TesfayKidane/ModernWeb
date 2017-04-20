import { Directive, HostListener, Renderer, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  colors = ['red','yellow', 'black','blue'];
  constructor(private renderer: Renderer, private el: ElementRef) { }
  @Output('myColorName') myColorName = new EventEmitter();
  selectedColor = '';
  @HostListener('click') onMouseClick(){
      this.selectedColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.applyColor(this.selectedColor);
      this.myColorName.emit(this.selectedColor);
  }
  
  applyColor(color)
  {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }
}
