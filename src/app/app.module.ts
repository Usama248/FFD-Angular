import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthComponent } from './pages/auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/Home/home.component';
import { RoboCoachComponent } from './pages/robo-coach/robo-coach.component';
import { FreeStuffComponent } from './pages/free-stuff/free-stuff.component';
import { HelpComponent } from './pages/help/help.component';
import { FAQComponent } from './pages/faq/faq.component';
import { RoboCheatComponent } from './pages/robo-cheat/robo-cheat.component';
import { StrengthOfScheduleComponent } from './pages/strength-of-schedule/strength-of-schedule.component';
import { RoboDraftComponent } from './pages/robo-draft/robo-draft.component';
import { RoboAuctionComponent } from './pages/robo-auction/robo-auction.component';
import { ArticlesComponent } from './pages/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RoboCoachComponent,
    FreeStuffComponent,
    HelpComponent,
    FAQComponent,
    RoboCheatComponent,
    StrengthOfScheduleComponent,
    RoboDraftComponent,
    RoboAuctionComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
