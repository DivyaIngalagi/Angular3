import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTtClas]'
})
export class TtClasDirective {
  @Input() appTtClas:string="";
  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.appTtClas);
}
}
