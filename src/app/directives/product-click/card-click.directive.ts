import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardClick]'
})
export class CardClickDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('click',) onClick() {
    this.elementRef.nativeElement.style.opacity = '0.4';
  }
  
  @HostListener('dblclick',) onDblClick() {
    this.elementRef.nativeElement.style.opacity = '1';
  }

}
