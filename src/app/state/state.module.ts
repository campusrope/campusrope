import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { EntityDataModule } from "@ngrx/data";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import {
  AppState,
  reducers,
  metaReducers,
  selectRouterState
} from "./core.state";
import { AuthEffects } from "../state/auth/auth.effects";
import {
  selectIsAuthenticated,
  selectAuth
} from "../state/auth/auth.selectors";
import { authLogin, authLogout } from "../state/auth/auth.actions";
import { CustomSerializer } from "./router/custom-serializer";

import { SettingsEffects } from "../state/settings/settings.effects";
import { LayoutEffects } from "../state/layout/layout.effects";
import { GoogleAnalyticsEffects } from "../state/google-analytics/google-analytics.effects";
import {
  selectSettingsLanguage,
  selectEffectiveTheme,
  selectSettingsStickyHeader
} from "../state/settings/settings.selectors";
import {
  SettingsActions,
  SettingsActionTypes,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled
} from "../state/settings/settings.actions";
import { entityConfig } from "../state/entity-metadata";

export {
  selectAuth,
  authLogin,
  authLogout,
  AppState,
  selectIsAuthenticated,
  selectRouterState,
  SettingsActions,
  SettingsActionTypes,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // ngrx
    EntityDataModule.forRoot(entityConfig),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AuthEffects,
      SettingsEffects,
      GoogleAnalyticsEffects,
      LayoutEffects
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: "Campusrope"
        })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }]
})
export class StateModule {}
