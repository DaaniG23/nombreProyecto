import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor (renderer: Renderer2, elementRef: ElementRef) {
    renderer.setStyle (elementRef.nativeElement, 'border-radius', '20px');
  }
}