import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import {BasicLoginRoutingModule} from './basic-login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BasicLoginRoutingModule,
  ],
  declarations: [BasicLoginComponent],
  
})
export class BasicLoginModule { 
  constructor(){
    console.log("Basic login module")
  }
}
