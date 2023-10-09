import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashComponent } from './pages/splash/splash.component';
import { GamesComponent } from './pages/games/games.component';
import { CountdownComponent } from './pages/games/components/countdown/countdown.component';
import { ScoreComponent } from './pages/games/components/score/score.component';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'games/:gameId', component: GamesComponent },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    GamesComponent,
    CountdownComponent,
  ],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
