import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { RoboCoachComponent } from './pages/robo-coach/robo-coach.component';
import { FreeStuffComponent } from './pages/free-stuff/free-stuff.component';
import { HelpComponent } from './pages/help/help.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FAQComponent } from './pages/faq/faq.component';
import { RoboCheatComponent } from './pages/robo-cheat/robo-cheat.component';
import { StrengthOfScheduleComponent } from './pages/strength-of-schedule/strength-of-schedule.component';
import { RoboDraftComponent } from './pages/robo-draft/robo-draft.component';
import { RoboAuctionComponent } from './pages/robo-auction/robo-auction.component';
import { ArticlesComponent } from './pages/articles/articles.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/Home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  {
    path: 'RoboCoach',
    component: RoboCoachComponent
  },
  {
    path: 'FreeStuff',
    component: FreeStuffComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/free-stuff/free-stuff.module').then(m => m.FreeStuffModule)
      },
    ]
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
    path: 'RoboDraft',
    component: RoboDraftComponent,
  },
  {
    path: 'RoboAuction',
    component: FreeStuffComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/robo-auction/robo-auction.module').then(m => m.RoboAuctionModule)
      },
    ]
  },
  {
    path: 'Articles',
    component: ArticlesComponent,
  },
  {
    path: 'authentication',
    component: AuthComponent,
    children: [
      {
        path: '',
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
