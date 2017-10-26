import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { PassengerCardComponent } from "./passenger-search/passenger-card.component";
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightBookingRouterModule } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        FlightBookingRouterModule
    ],
    declarations: [
        PassengerSearchComponent,
        PassengerCardComponent,
        FlightSearchComponent,
        PassengerEditComponent
,
    FlightBookingComponent
],
    providers: [],
    exports: [
        PassengerSearchComponent
    ]

})
export class FlightBookingModule { }
