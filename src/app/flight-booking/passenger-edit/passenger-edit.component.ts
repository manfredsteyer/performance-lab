import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Passenger } from '../../entities/passenger';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-passenger-edit',
  templateUrl: './passenger-edit.component.html'
})
export class PassengerEditComponent implements OnInit {

  id: string;
  passenger: Passenger;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private passengerService: PassengerService) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];

      this
        .passengerService
        .findById(this.id)
        .subscribe(
          p => { this.passenger = p; },
          err => {console.error('Fehler beim Laden', err); }
        );

    })
  }

  save() {
    this
      .passengerService
      .save(this.passenger)
      .subscribe(
        p => {
          this.passenger = p;
          this.message = 'Successfully saved!';
        },
        err => {
          console.debug('Error during Saving', err);
          this.message = 'Error: ' + err.text();
        }
      );
  }
}
