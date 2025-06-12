import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  ishighlighted = false;

  @Output()
  toggleHighligth = new EventEmitter();

  constructor() {
    console.log("Directive created now..");
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return "1px solid red";
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return "true"
  }

  @HostListener('mouseover')
  mouseOver() {
    this.ishighlighted = true;
    this.toggleHighligth.emit();
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.ishighlighted = false;
    this.toggleHighligth.emit();
  }

  toggle() {
    this.ishighlighted = !this.ishighlighted;
    this.toggleHighligth.emit(this.ishighlighted);
  }

}
