import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SomeCoreComponent} from '../app/some-core/some-core.component';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: async() => await import(`../../projects/app1/src/app/app.module-export`).then(m => m.App1Module)
  },
  {
    path: 'app2',
    loadChildren: async() => await import('../../projects/app2/src/app/app.module-export').then(m => m.App2Module)
  },
  {
    path: 'somecoreroute',
    component: SomeCoreComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }