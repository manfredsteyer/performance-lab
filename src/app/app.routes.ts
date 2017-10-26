import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hotels',
    loadChildren: './hotels/hotels.module#HotelsModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
