import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AuthComponent, GamesComponent, SplashComponent } from './pages';

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
