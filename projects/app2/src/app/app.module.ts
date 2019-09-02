import { BrowserModule } from '@angular/platform-browser/esm2015';
import { NgModule } from '@angular/core';

import { App2Component } from './app.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { showHideReducer } from './store/showHideElement/hide-show.reducer';
import { AdminLibModule } from 'admin-lib';

const route : Routes = [
  {'path':'',component:SecondComponent}
];

@NgModule({
  declarations: [
    App2Component,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AdminLibModule,
    RouterModule.forRoot(route),
    StoreModule.forRoot({}),
    StoreModule.forFeature('app2ShowHide', showHideReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [],
  bootstrap: [App2Component]
})
export class AppModule { }
