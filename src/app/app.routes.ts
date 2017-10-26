import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    path: 'flight-booking',
    loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES, {
  preloadingStrategy: PreloadAllModules
});
