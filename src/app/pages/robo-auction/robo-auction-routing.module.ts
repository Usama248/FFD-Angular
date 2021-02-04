import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoboAuctionHomeComponent } from './robo-auction-home/robo-auction-home.component';
import { AuctionComponent } from './auction/auction.component';
const routes: Routes = [
  {
    path: '',
    component: RoboAuctionHomeComponent,
    data: {
      title: 'Free Stuff',
      status: false
    }
  },
  {
     path: 'Auction',
     component: AuctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoboAuctionRoutingModule {
}
