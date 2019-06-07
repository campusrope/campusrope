import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ROOT_FEATURE_KEY, RootState } from './root.reducer';

// Lookup the 'Root' feature state managed by NgRx
const getRootState = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);

const getLoaded = createSelector(
  getRootState,
  (state: RootState) => state.loaded
);
const getError = createSelector(
  getRootState,
  (state: RootState) => state.error
);

const getAllRoot = createSelector(
  getRootState,
  getLoaded,
  (state: RootState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getRootState,
  (state: RootState) => state.selectedId
);
const getSelectedRoot = createSelector(
  getAllRoot,
  getSelectedId,
  (root, id) => {
    const result = root.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const rootQuery = {
  getLoaded,
  getError,
  getAllRoot,
  getSelectedRoot
};
