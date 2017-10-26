import {Passenger} from '../../entities/passenger';
import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';

import {ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'passenger-card',
    templateUrl: 'passenger-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerCardComponent {
    @Input() item: Passenger;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor(
      private element: ElementRef,
      private zone: NgZone
    ) { }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

  blink() {
    // Dirty Hack used to visualize the change detector
    // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
      }, 1000);
    });

    return null;
  }

}
