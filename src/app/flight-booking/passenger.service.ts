import {Http, Headers, URLSearchParams} from '@angular/http';
import {Passenger} from '../entities/passenger';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PassengerService {

  constructor(private http: Http) {
  }

  passengers: Passenger[] = [];

  addBonusMiles() {
    if (this.passengers.length == 0) return;
    
    let oldPassengers = this.passengers;
    let oldPassenger = oldPassengers[0];

    let newPassenger:Passenger = { ...oldPassenger, bonusMiles: oldPassenger.bonusMiles + 1000 };
    let newPassengers = [newPassenger, ...oldPassengers.slice(1)];

    this.passengers = newPassengers;
  }

  find(name: string): void {

      let url = 'http://www.angular.at/api/passenger';

      let headers = new Headers();
      headers.set('Accept', 'application/json');

      let search = new URLSearchParams();
      search.set('name', name);

      this.http
          .get(url, { headers, search})
          .map(resp => resp.json())
          .subscribe(
            p => {this.passengers = p},
            err => {console.error('Error loading passangers', err);}
          )
  }

  findById(id: string): Observable<Passenger> {

    let url = 'http://www.angular.at/api/passenger';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('id', id);

    return this.http
      .get(url, { headers, search})
      .map(resp => resp.json());
  }

  save(passenger: Passenger): Observable<Passenger> {

    let url = 'http://www.angular.at/api/passenger';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this.http
      .post(url, passenger, { headers })
      .map(resp => resp.json());
  }

}
