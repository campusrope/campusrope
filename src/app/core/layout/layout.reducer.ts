import { Action, createReducer, Store } from "../ngrx-actions";
import { SetIsMobile, SetSidenav, ToggleSidenav } from "./layout.actions";
import { LayoutState } from "./layout.model";

@Store<LayoutState>({
  showSidenav: false,
  isMobile: false
})
export class StateStore {
  @Action(SetSidenav)
  setSidenav(state: LayoutState, action: SetSidenav): LayoutState {
    return { ...state, showSidenav: action.payload };
  }

  @Action(ToggleSidenav)
  toggleSidenavSuccess(state: LayoutState): LayoutState {
    return { ...state, showSidenav: !state.showSidenav };
  }

  @Action(SetIsMobile)
  setIsMobile(state: LayoutState, action: SetIsMobile): LayoutState {
    return {
      showSidenav: state.showSidenav,
      isMobile: action.payload
    };
  }
}

export function layoutReducer(state, action) {
  return createReducer(StateStore)(state, action);
}
