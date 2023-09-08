import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/Home/home.component';
import { GamesComponent } from './Views/Games/games.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games/:gameId', component: GamesComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GamesComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
