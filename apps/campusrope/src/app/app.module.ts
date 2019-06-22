import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { SharedModule } from '@campusrope/shared';
import { StateRootModule } from '@campusrope/state/root';
import { AngularMaterialModule } from '@campusrope/material';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AppbarComponent } from './appbar/appbar.component';
import { CoreModule } from './core';

export function appFactoryName() {
  return 'campusrope';
}

@NgModule({
  declarations: [AppComponent, AppbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabled' }),
    SharedModule.forRoot(),
    AngularMaterialModule,
    StateRootModule,
    CoreModule,
    StoreDevtoolsModule.instrument({
      name: 'campusrope',
      logOnly: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, appFactoryName, {
      enableFirestoreSync: false,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
