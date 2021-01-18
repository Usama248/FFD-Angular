import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRegComponent } from './basic-reg.component';
import {BasicRegRoutingModule} from './basic-reg-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BasicRegRoutingModule,
  ],
  declarations: [BasicRegComponent]
})
export class BasicRegModule { }
