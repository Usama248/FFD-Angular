import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/Home/home.component';
import {RoboCoachComponent } from './pages/robo-coach/robo-coach.component';
import {FreeStuffComponent } from './pages/free-stuff/free-stuff.component';
import {HelpComponent } from './pages/help/help.component';
import {AuthComponent} from './pages/auth/auth.component';
import {FAQComponent} from './pages/faq/faq.component';
import {RoboCheatComponent} from './pages/robo-cheat/robo-cheat.component';
import { StrengthOfScheduleComponent } from './pages/strength-of-schedule/strength-of-schedule.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home',
   component: HomeComponent
  },
  {
    path: 'RoboCoach',
   component: RoboCoachComponent
  },
  {
    path: 'FreeStuff',
   component: FreeStuffComponent,
  },
  {
    path: 'Help',
   component: HelpComponent,
  },
  {
    path: 'FAQ',
   component: FAQComponent,
  },
  {
    path: 'RoboCheat',
   component: RoboCheatComponent,
  },
  {
    path: 'strengthofschedule',
   component: StrengthOfScheduleComponent,
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
