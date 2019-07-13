import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState } from './layout.model';

const getState = createFeatureSelector<LayoutState>('layout');

export const getIsMobile = createSelector(
  getState,
  (state: LayoutState) => state.isMobile
);

export const getShowSidenav = createSelector(
  getState,
  (state: LayoutState) => state.showSidenav
);
