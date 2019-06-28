import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { SharedModule } from '@campusrope/shared';
import { StateRootModule } from '@campusrope/state/root';
import { AngularMaterialModule } from '@campusrope/material';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AppbarComponent } from './appbar/appbar.component';
import { CoreModule } from './core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFireModule } from '@angular/fire';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export function appFactoryName() {
  return 'campusrope';
}

@NgModule({
  declarations: [AppComponent, AppbarComponent,NotFoundPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, appFactoryName, {
      enableFirestoreSync: false,
    }),
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabled' }),
    SharedModule.forRoot(),
    AngularMaterialModule,
    StateRootModule,
    CoreModule,
    StoreDevtoolsModule.instrument({
      name: 'campusrope',
      logOnly: environment.production
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
