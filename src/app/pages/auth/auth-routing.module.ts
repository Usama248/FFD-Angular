import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BasicLoginComponent } from './login/basic-login/basic-login.component';
import { BasicRegComponent } from './registration/basic-reg/basic-reg.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentication',
      status: false
    },
    children: [
      {
        path: 'login',
        component: BasicLoginComponent
      },
      {
        path: 'registration',
        component: BasicRegComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
 }
