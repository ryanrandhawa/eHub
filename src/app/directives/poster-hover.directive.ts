import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appPosterHover]'
})
export class PosterHoverDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') onMouseOver() {
    const element = this.elRef.nativeElement.querySelector('.card-img-overlay');
    this.renderer.setStyle(element, 'display', 'block');
    this.renderer.setStyle(element, 'background-color', 'rgba(0, 0, 0, 0.7)');
  }

  @HostListener('mouseout') onMouseOut() {
    const element = this.elRef.nativeElement.querySelector('.card-img-overlay');
    this.renderer.setStyle(element, 'display', 'none');
  }

}
