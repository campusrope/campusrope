import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ROUTER_FEATURE_KEY, RouterState } from './router.reducer';

// Lookup the 'Router' feature state managed by NgRx
const getRouterState = createFeatureSelector<RouterState>(ROUTER_FEATURE_KEY);

const getLoaded = createSelector(
  getRouterState,
  (state: RouterState) => state.loaded
);
const getError = createSelector(
  getRouterState,
  (state: RouterState) => state.error
);

const getAllRouter = createSelector(
  getRouterState,
  getLoaded,
  (state: RouterState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getRouterState,
  (state: RouterState) => state.selectedId
);
const getSelectedRouter = createSelector(
  getAllRouter,
  getSelectedId,
  (router, id) => {
    const result = router.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const routerQuery = {
  getLoaded,
  getError,
  getAllRouter,
  getSelectedRouter
};
