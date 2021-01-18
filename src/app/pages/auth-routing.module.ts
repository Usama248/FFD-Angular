import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { IsLoggedIn } from '../_ helpers';
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
       // canActivate: [IsLoggedIn],
        loadChildren: () => import('./auth/login/basic-login/basic-login.module').then(m => m.BasicLoginModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('./auth/registration/basic-reg/basic-reg.module').then(m => m.BasicRegModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { 
constructor(){
console.log("auth module")

}

}
