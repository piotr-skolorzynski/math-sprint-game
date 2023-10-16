import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashComponent } from './Pages/Splash/splash.component';
import { GamesComponent } from './Pages/Games/games.component';
import { CountdownComponent } from './Pages/Games/components/countdown/countdown.component';
import { ScoreModalComponent } from './Pages/Games/components/score-modal/score-modal.component';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'games/:gameId', component: GamesComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    GamesComponent,
    CountdownComponent,
    ScoreModalComponent,
  ],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
