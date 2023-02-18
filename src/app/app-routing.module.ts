import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { GamesComponent } from './components/games/games.component'
import { DetailgameComponent } from "./components/detailgame/detailgame.component";
import { CalendarComponent } from './components/calendar/calendar.component';
import { SocialComponent } from './components/social/social.component';


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'games', component: GamesComponent},
{path: 'calendar', component: CalendarComponent},
{path: 'games/:id', component: DetailgameComponent},
{path: 'social', component: SocialComponent},
{path: '', redirectTo:'/home', pathMatch:'full'},
];



@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }