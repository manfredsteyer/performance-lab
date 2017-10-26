import { FlightBookingComponent } from './flight-booking.component';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';

const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    children: [
      {
        path: '',
        redirectTo: 'passenger-search',
        pathMatch: 'full'
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'passenger-edit/:id',
        component: PassengerEditComponent
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      }
    ]
  }
];

export const FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
