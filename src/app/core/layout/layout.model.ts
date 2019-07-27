import { AppState } from "../core.module";

export interface LayoutState {
  showSidenav: boolean;
  isMobile: boolean;
}

export interface State extends AppState {
  layout: LayoutState;
}
