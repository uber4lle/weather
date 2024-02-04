import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./main/main.component').then(c => c.MainComponent) },
  {
    path: 'forecast/:zipcode',
    loadComponent: () => import('./forecast/forecast.component').then(c => c.ForecastComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
