import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutState } from '../../core/layout/layout.model';
import { ToggleSidenav } from 'src/app/core/layout/layout.actions';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  constructor(private store: Store<LayoutState>) {}

  ngOnInit() {}

  toggleSidenav() {
    this.store.dispatch(new ToggleSidenav());
  }

}
