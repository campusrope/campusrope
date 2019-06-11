import { Params } from '@angular/router';
import { Data } from '@angular/router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface UrlSnapshot {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
  guarded: boolean;
}

export type State = RouterReducerState<UrlSnapshot>;

export const reducer = routerReducer;