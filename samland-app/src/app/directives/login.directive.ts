import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {

  constructor(private elementRef: ElementRef) { }

}
