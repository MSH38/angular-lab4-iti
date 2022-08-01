import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(private elem:ElementRef){
    elem.nativeElement.style.borderRadius = '10px';
    elem.nativeElement.style.boxShadow = '-1px 1px 9px 2px rgba(0,0,0,0.69)';
  }

  @HostListener('mouseover') onmouseOver(){
    this.elem.nativeElement.style.borderRadius = '10px';
    this.elem.nativeElement.style.boxShadow = '-1px 1px 15px 5px rgba(0,0,0,0.75)';
  }
  @HostListener('mouseout') onmouseOut(){
    this.elem.nativeElement.style.borderRadius = '10px';
    this.elem.nativeElement.style.boxShadow = '-1px 1px 9px 2px rgba(0,0,0,0.69)';
  }
}