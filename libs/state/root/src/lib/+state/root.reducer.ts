import { RootAction, RootActionTypes } from './root.actions';

export const ROOT_FEATURE_KEY = 'root';

/**
 * Interface for the 'Root' data used in
 *  - RootState, and
 *  - rootReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface RootState {
  list: Entity[]; // list of Root; analogous to a sql normalized table
  selectedId?: string | number; // which Root record has been selected
  loaded: boolean; // has the Root list been loaded
  error?: any; // last none error (if any)
}

export interface RootPartialState {
  readonly [ROOT_FEATURE_KEY]: RootState;
}

export const initialState: RootState = {
  list: [],
  loaded: false
};

export function rootReducer(
  state: RootState = initialState,
  action: RootAction
): RootState {
  switch (action.type) {
    case RootActionTypes.RootLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
