import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeCoreComponent } from './some-core/some-core.component';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AdminLibModule } from 'projects/admin-lib/src/public_api';


@NgModule({
  declarations: [
    AppComponent,
    SomeCoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AdminLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
