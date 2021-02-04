import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeStuffHomeComponent } from './free-stuff-home/free-stuff-home.component';
import { RoboContestComponent } from './robo-contest/robo-contest.component';
import { LinksComponent } from './links/links.component';
import { RoboToutComponent } from './robo-tout/robo-tout.component';
const routes: Routes = [
  {
    path: '',
    component: FreeStuffHomeComponent,
    data: {
      title: 'Free Stuff',
      status: false
    }
  },
  {
     path: 'RoboContest',
     component: RoboContestComponent
  },
  {
     path: 'Links',
     component: LinksComponent
  },
  {
    path: 'RoboTout',
    component: RoboToutComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeStuffRoutingModule {
}
