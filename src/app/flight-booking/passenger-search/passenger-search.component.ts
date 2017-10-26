import { Component } from "@angular/core";
import { Passenger } from "../../entities/passenger";
import { PassengerService } from "../passenger.service";

@Component({
    selector: 'passenger-search',
    templateUrl: 'passenger-search.component.html',
    styleUrls: ['passenger-search.component.css']
})
export class PassengerSearchComponent {

    name: string;
    selectedPassenger: Passenger;
    basket = { }

    constructor(private passengerService: PassengerService) {
    }

    addBonusMiles() {
      this.passengerService.addBonusMiles();
    }

    get passengers(): Passenger[] {
      return this.passengerService.passengers;
    }

    search(): void {
        this.passengerService.find(this.name);
    }

    select(p: Passenger) {
        this.selectedPassenger = p;
    }
}
