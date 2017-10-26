import { HOTELS_ROUTES } from './hotels.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(HOTELS_ROUTES)
  ],
  declarations: [HotelsComponent]
})
export class HotelsModule { }