import { RouterAction, RouterActionTypes } from './router.actions';

export const ROUTER_FEATURE_KEY = 'router';

/**
 * Interface for the 'Router' data used in
 *  - RouterState, and
 *  - routerReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface RouterState {
  list: Entity[]; // list of Router; analogous to a sql normalized table
  selectedId?: string | number; // which Router record has been selected
  loaded: boolean; // has the Router list been loaded
  error?: any; // last none error (if any)
}

export interface RouterPartialState {
  readonly [ROUTER_FEATURE_KEY]: RouterState;
}

export const initialState: RouterState = {
  list: [],
  loaded: false
};

export function routerReducer(
  state: RouterState = initialState,
  action: RouterAction
): RouterState {
  switch (action.type) {
    case RouterActionTypes.RouterLoaded: {
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
