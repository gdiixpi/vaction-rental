import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityRoutingModule } from './availability-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AvailabilityComponent } from './availability.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { MainModule } from '../../main.module';
import { ReserveComponent } from '../reserve/reserve.component';

@NgModule({
  declarations: [AvailabilityComponent, ReserveComponent],
  imports: [
    CommonModule,
    AvailabilityRoutingModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    MainModule,
  ],
})
export class AvailabilityModule {}
