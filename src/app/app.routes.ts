import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Game } from './pages/game/game';
import { End } from './pages/end/end';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'game', component: Game },
  { path: 'end', component: End },
  { path: '**', redirectTo: 'home' }
];