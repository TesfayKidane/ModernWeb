import { Directive, ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {
  constructor(public element: ElementRef, public rendere: Renderer ){
 
   }
   ngAfterViewInit(){
      let content = this.element.nativeElement.innerHTML;
      this.element.nativeElement.innerHTML = content.toUpperCase()
   }
}
