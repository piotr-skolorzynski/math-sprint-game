import { Route, RouterModule } from '@angular/router';

import { SplashComponent } from './pages/splash/splash.component';
import { GamesComponent } from './pages/games/games.component';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  { path: '', component: SplashComponent },
  { path: 'games/:gameId', component: GamesComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
