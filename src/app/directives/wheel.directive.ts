import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Debounce } from 'src/app/decorators/debounce';

@Directive({
  selector: '[deitersWheel]'
})
export class WheelDirective {

  @Output() next = new EventEmitter();

  constructor() { }

  @HostListener('wheel', ['$event'])
  @Debounce(500)
  checkScroll(e) {
    if (e.deltaY > 0) {
      this.next.emit(true);
    }
    else if (e.deltaY < 0) {
      this.next.emit(false);
    }
  }

  @HostListener('pan', ['$event'])
  @Debounce(500)
  checkPan(e) {
    if (e.additionalEvent === 'panup') {
      this.next.emit(true);
    }
    else if (e.additionalEvent === 'pandown') {
      this.next.emit(false);
    }
  }
}
