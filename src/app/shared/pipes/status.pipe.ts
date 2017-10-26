

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status',
    pure: true
})
export class StatusPipe implements PipeTransform {
    transform(value: any, fmt: string): any {
        
        let short, long;

        switch(value) {
            case "A":
                short = 'SEN';
                long = 'Senator';
            break;
            case "B":
                short = 'FTL';
                long = 'Frequent Traveler';
            break;
            case "C":
                short = '-';
                long = 'Passenger';
            break;
            default:
                short = long = value;
        }

        if (fmt == 'short') return short;
        return long;

    }
}