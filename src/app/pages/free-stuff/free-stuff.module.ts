import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FreeStuffRoutingModule} from './free-stuff-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FreeStuffHomeComponent } from './free-stuff-home/free-stuff-home.component';
import { RoboContestComponent } from './robo-contest/robo-contest.component';
import { LinksComponent } from './links/links.component';
import { RoboToutComponent } from './robo-tout/robo-tout.component';


@NgModule({
  imports: [
    CommonModule,
    FreeStuffRoutingModule,
  ],
  declarations: [FreeStuffHomeComponent, RoboContestComponent, LinksComponent, RoboToutComponent]
})
export class FreeStuffModule {
  constructor(){
    console.log("auth module")
  }
 }
