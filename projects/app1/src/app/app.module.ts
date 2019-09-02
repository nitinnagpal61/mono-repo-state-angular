import { BrowserModule } from '@angular/platform-browser/esm2015';
import { NgModule } from '@angular/core';

import { App1Component } from './app.component';
import { FirstComponent } from './first/first.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { showHideReducer } from './store/showHideElement/hide-show.reducer';
import { AdminLibModule } from 'admin-lib';

const route : Routes = [
  {'path':'',component:FirstComponent}
];

@NgModule({
  declarations: [
    App1Component,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AdminLibModule,
    RouterModule.forRoot(route),
    StoreModule.forRoot({}),
    StoreModule.forFeature('app1ShowHide', showHideReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class AppModule { }
