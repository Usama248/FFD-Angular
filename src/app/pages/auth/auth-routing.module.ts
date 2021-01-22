import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BasicLoginComponent } from './login/basic-login/basic-login.component';
import { BasicRegComponent } from './registration/basic-reg/basic-reg.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';
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
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent
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
