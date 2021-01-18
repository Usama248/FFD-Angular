import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import {BasicLoginRoutingModule} from './basic-login-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BasicLoginRoutingModule,
    HttpClientModule
  ],
  declarations: [BasicLoginComponent],
})
export class BasicLoginModule { 
  constructor() {
    console.log("basic  loaded")
  }
}
