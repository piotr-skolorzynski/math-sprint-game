import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './Pages/Splash/splash.component';
import { GamesComponent } from './Pages/Games/games.component';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'games/:gameId', component: GamesComponent },
];

@NgModule({
  declarations: [AppComponent, SplashComponent, GamesComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
