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
    RoboCheatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
