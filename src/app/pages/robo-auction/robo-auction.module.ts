import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoboAuctionRoutingModule} from './robo-auction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RoboAuctionHomeComponent } from './robo-auction-home/robo-auction-home.component';
import { AuctionComponent } from './auction/auction.component';



@NgModule({
  imports: [
    CommonModule,
    RoboAuctionRoutingModule,
  ],
  declarations: [RoboAuctionHomeComponent, AuctionComponent]
})
export class RoboAuctionModule {
  constructor(){
    console.log("auth module")
  }
 }
