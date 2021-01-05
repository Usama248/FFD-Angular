import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {AuthComponent} from './pages/auth-routing.module';

const routes: Routes = [
  {
    path: '',
   // component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
