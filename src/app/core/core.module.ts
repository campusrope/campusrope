import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf, ErrorHandler } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { environment } from "../../environments/environment";
import { AuthGuardService } from "./auth/auth-guard.service";
import { TitleService } from "./title/title.service";
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations
} from "./animations/route.animations";
import { AnimationsService } from "./animations/animations.service";
import { AppErrorHandler } from "./error-handler/app-error-handler.service";
import { LocalStorageService } from "./local-storage/local-storage.service";
import { HttpErrorInterceptor } from "./http-interceptors/http-error.interceptor";
import { BaseUrlInterceptor } from "./http-interceptors/base-url.interceptor";
import { AuthTokenInterceptor } from './http-interceptors/auth-token.interceptor';
import { NotificationService } from "./notifications/notification.service";
import { SharedModule } from "../shared/shared.module";
import { StateModule } from "../state/state.module";
import { StateConstantService } from "./constants/state-constant.service";
import { AdminTaskService } from "../features/admin-task/admin-task.service";

export {
  TitleService,
  routeAnimations,
  LocalStorageService,
  ROUTE_ANIMATIONS_ELEMENTS,
  AnimationsService,
  AuthGuardService,
  NotificationService,
  StateConstantService
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    ".json"
  );
}

@NgModule({
  imports: [
  // angular
    CommonModule,
    HttpClientModule,
    SharedModule,

    // state Management
    StateModule,

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    { provide: "BASE_API_URL", useValue: environment.apiUrl },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    AdminTaskService
  ],
  exports: [TranslateModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import only in AppModule");
    }
  }
}
