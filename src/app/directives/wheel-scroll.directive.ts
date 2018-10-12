import { Directive, Input, HostListener, Inject, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Debounce } from 'src/app/decorators/debounce';

@Directive({
  selector: '[deitersWheelScroll]'
})
export class WheelScrollDirective {

	scrollPosition: number = 0;
  bottomPosition: number = -1;
  @Input() active: string;
  @Input() activeState: string = 'show';
  @Input() inactiveState: string = 'hide';
  @Output() next = new EventEmitter();
  @Output() top = new EventEmitter();
  @Output() bottom = new EventEmitter();
  @Output() bottomUp = new EventEmitter();
  @Output() bottomDown = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('wheel', ['$event'])
  checkScroll(e) {
    if (this.active === 'hide') {
      this.bottomPosition = -1;
    }
    if (e.deltaY > 0 && this.active === this.inactiveState) {
      e.preventDefault();
      this.next.emit();
    }
    else if (this.active === this.activeState) {
      let bottom = document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight;
      if (e.deltaY < 0 && this.scrollPosition <= 0) {
        this.top.emit();
      }
      else if (e.deltaY < 0 && this.scrollPosition <= this.bottomPosition + 100) {
        this.bottomUp.emit();
      }
      else if (e.deltaY > 0 && this.scrollPosition >= this.bottomPosition - this.document.documentElement.clientHeight && this.bottomPosition != -1) {
        this.bottomDown.emit();
      }
      else if (e.deltaY > 0 && bottom) {
        if (this.bottomPosition == -1) {
          this.bottomPosition = document.documentElement.scrollTop + document.documentElement.clientHeight;
        }
        this.bottom.emit();
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (this.active === 'hide') {
      this.bottomPosition = -1;
    }
    this.scrollPosition = e.pageY || this.document.documentElement.scrollTop;
  }

  @HostListener('pan', ['$event'])
  checkPan(e) {
    if (this.active === 'hide') {
      this.bottomPosition = -1;
    }
    if (e.additionalEvent === 'panup' && this.active === this.inactiveState) {
      this.next.emit();
    }
    else if (this.active === this.activeState) {
      let bottom = document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight;
      if (e.additionalEvent === 'pandown' && this.scrollPosition <= 0) {
        this.top.emit();
      }
      else if (e.additionalEvent === 'pandown' && this.scrollPosition <= this.bottomPosition + 100) {
        this.bottomUp.emit();
      }
      else if (e.additionalEvent === 'panup' && this.scrollPosition >= this.bottomPosition - this.document.documentElement.clientHeight && this.bottomPosition != -1) {
        this.bottomDown.emit();
      }
      else if (e.additionalEvent === 'panup' && bottom) {
        this.bottom.emit();
      }
    }
  }
}
