import { NgModule } from '@angular/core';
import { StatusPipe } from "./pipes/status.pipe";
import { CommonModule } from "@angular/common";
import { NameValidationDirective } from "./validation/name-validation.directive";
import { PublicPeopleValidationDirective } from "app/shared/validation/public-people-validation.directive";
import { AsyncNameValidationDirective } from "app/shared/validation/async-name-validation.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StatusPipe,
        NameValidationDirective,
        AsyncNameValidationDirective,
        PublicPeopleValidationDirective
    ],
    providers: [],
    exports: [
        StatusPipe,
        NameValidationDirective,
        AsyncNameValidationDirective,
        PublicPeopleValidationDirective
    ]
})
export class SharedModule { }
