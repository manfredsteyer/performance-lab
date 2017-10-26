import { Directive, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Http, Headers, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Directive({
    selector: 'input[asyncName]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncNameValidationDirective,
            multi: true
        }
    ]
})
export class AsyncNameValidationDirective implements AsyncValidator {
    constructor(private http: Http) { }

    validate(c: AbstractControl): Observable<any> {

        let url = 'http://www.angular.at/api/passenger';
        let headers = new Headers();
        headers.set('Accept', 'text/json');
        let search = new URLSearchParams();
        search.set('name', c.value);

        return this
                .http
                .get(url, {search, headers})
                .map(resp => resp.json())
                .map(passengers => passengers.length > 0)
                .map(ok => ok ? {} : {asyncName:true});
    }

}
