import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormGroup } from '@angular/forms';

@Directive({
    selector: 'form[publicPeople]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PublicPeopleValidationDirective,
            multi: true
        }
    ]
})
export class PublicPeopleValidationDirective implements Validator {
    constructor() { }

    validate(c: AbstractControl): any {

        let group: FormGroup = c as FormGroup;

        let nameCtrl = group.controls['name'];
        let firstNameCtrl = group.controls['firstName'];

        if (!nameCtrl || !firstNameCtrl) return { };

        if (nameCtrl.value == 'Wayne' && firstNameCtrl.value == 'Bruce') {
            return {
                publicPeople: true
            }
        }

        return { }
    }

}
