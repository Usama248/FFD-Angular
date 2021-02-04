import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAlertsComponent } from './my-alerts/my-alerts.component';
import { HomeDefaultComponent } from './home-default/home-default.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [MyAlertsComponent, HomeDefaultComponent]
})
export class HomeModule {
  constructor(){
    console.log("auth module")
  }
 }
