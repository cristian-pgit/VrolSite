import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/card/card.component';
import { NewgameComponent } from './components/newgame/newgame.component';
import { EditgameComponent } from './components/editgame/editgame.component';
import { DeletegameComponent } from './components/deletegame/deletegame.component';
import { BanersComponent } from './components/baners/baners.component';
import { NewbanerComponent } from './components/newbaner/newbaner.component';
import { EditbanerComponent } from './components/editbaner/editbaner.component';
import { DeletebanerComponent } from './components/deletebaner/deletebaner.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DetailgameComponent } from './components/detailgame/detailgame.component';
import { GamesComponent } from './components/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CardComponent,
    NewgameComponent,
    EditgameComponent,
    DeletegameComponent,
    BanersComponent,
    NewbanerComponent,
    EditbanerComponent,
    DeletebanerComponent,
    CalendarComponent,
    DetailgameComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
