import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deiters-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() project?: number;
  @Input() ascii: boolean;

  constructor() { }

  ngOnInit() {
  }

}
