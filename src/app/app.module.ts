import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashComponent } from './pages/splash/splash.component';
import { GamesComponent } from './pages/games/games.component';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'games/:gameId', component: GamesComponent },
];

@NgModule({
  declarations: [AppComponent, SplashComponent, GamesComponent],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
