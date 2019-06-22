import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'campusrope-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
