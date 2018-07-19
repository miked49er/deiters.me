import { Directive, Input, HostListener, Inject, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[deitersWheelScroll]'
})
export class WheelScrollDirective {

	scrollPosition: number = 0;
  @Input() active: string;
  @Input() activeState: string = 'show';
  @Input() inactiveState: string = 'hide';
  @Output() next = new EventEmitter();
  @Output() top = new EventEmitter();
  @Output() bottom = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('wheel', ['$event'])
  checkScroll(e) {
    if (e.deltaY > 0 && this.active === this.inactiveState) {
      e.preventDefault();
      this.next.emit();
    }
    else if (this.active === this.activeState) {
      let bottom = document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight;
      if (e.deltaY < 0 && this.scrollPosition <= 0) {
        this.top.emit();
      }
      else if (e.deltaY > 0 && bottom) {
        this.bottom.emit();
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    this.scrollPosition = e.pageY || this.document.documentElement.scrollTop;
  }
}
