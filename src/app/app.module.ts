import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PassengerService } from "./flight-booking/passenger.service";
import { FlightBookingModule } from "./flight-booking/flight-booking.module";
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlightBookingModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    PassengerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
