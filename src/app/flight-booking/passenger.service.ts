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
    // Demo-Method that adds some bonus miles to
    // the first loaded passenger
    // Used to demonstrate OnPush

    if (this.passengers.length == 0) return;
    this.passengers[0].bonusMiles += 1000;
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
