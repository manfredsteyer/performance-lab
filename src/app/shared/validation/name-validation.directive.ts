import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: 'input[valName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: NameValidationDirective,
            multi: true
        }
    ]
})
export class NameValidationDirective implements Validator {
    constructor() { }

    @Input() valName: string;

    validate(c: AbstractControl): any {

        let regExp;

        if (this.valName == 'strict') {
            regExp = /^[A-Za-z-]*$/;
        }
        else {
            regExp = /^[A-Za-z- \.]*$/;
        }

        if (!c.value) return { };
        if (!c.value.match(regExp)) {
            return {
                valName: true
            }
        }
        return { };
    }

}
