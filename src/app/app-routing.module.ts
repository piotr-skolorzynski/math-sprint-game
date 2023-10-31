import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SplashComponent } from './pages/splash/splash.component';
import { GamesComponent } from './pages/games/games.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Route[] = [
  { path: '', component: SplashComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'games/:gameId', component: GamesComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
