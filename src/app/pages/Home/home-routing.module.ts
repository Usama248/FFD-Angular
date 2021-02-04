import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAlertsComponent } from './my-alerts/my-alerts.component';
import { HomeDefaultComponent } from './home-default/home-default.component';
const routes: Routes = [
  {
    path: '',
    component: HomeDefaultComponent,
    data: {
      title: 'Home',
      status: false
    }
  },
  {
    path: 'MyAlerts',
    component: MyAlertsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
