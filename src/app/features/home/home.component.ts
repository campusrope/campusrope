import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store , select} from '@ngrx/store';
import { State } from '../../core/layout/layout.model';
import { getIsMobile } from '../../core/layout/layout.selectors';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.isMobile$ = this.store.pipe(select(getIsMobile));
  }

  get isDesktop$() {
    return this.isMobile$.pipe(map((value: boolean) => !value));
  }

}
