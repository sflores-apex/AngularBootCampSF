import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective implements OnInit {

  constructor(private readonly el: ElementRef) { }

  ngOnInit(): void {
    const elementValue: string = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText =
      elementValue.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

}
