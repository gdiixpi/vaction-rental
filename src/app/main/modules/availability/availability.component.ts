import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventService } from 'src/app/core/services/event.service';
import * as moment from 'moment';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityComponent implements OnInit {
  startDate!: Date;
  endDate!: Date;
  customStartDate: any;
  customEndDate: any;
  events: any;
  eventArray: any = [];
  getbookdata!: FormGroup;
  submit!: boolean;
  endTimeBefore = '23:59:00';
  bookedNewArray: any = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    selectOverlap: false,
    select: (arg: DateSelectArg) => {
      console.log(arg.startStr, '1'); // the start date of the selection
      console.log(arg.endStr, '2'); // the end date of the selection
    },
    events: [],
    dateClick: (arg: DateClickArg) => {
      if (!this.startDate) {
        this.startDate = arg.date;
      } else if (!this.endDate) {
        this.endDate = arg.date;
      }
    },
  };

  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private api: EventService,
    private cd: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.getCalenderApi();
    this.getbookdata = new FormGroup({
      startDate: new FormControl('', Validators.required),
    });
  }

  getCalenderApi() {
    let bookedDate = {};
    this.api
      .getPublic('api/listings/' + '63b0acfea8e5de14cfd9397b' + '/bookings')
      .subscribe({
        next: (data: any) => {
          data.forEach((element) => {
            bookedDate = {
              title: 'Booked',
              start: moment(element.startDate).format('YYYY-MM-DD'),
              end:
                moment(element.endDate).format('YYYY-MM-DD') +
                'T' +
                this.endTimeBefore,
            };
            // this.onchange(bookedDate);
          });
        },
      });
  }

  async onchange(value: any) {
    this.bookedNewArray = [];
    this.bookedNewArray.push(value);
    this.calendarOptions.events = this.bookedNewArray;
    await this.cd.detectChanges();
  }

  handleDateClick(event: any) {
    console.log('date click! ', event.dateStr);
    // do something with the date that was clicked
  }

  validSubmit() {
    this.submit = true;
    if (this.getbookdata.invalid) {
      return;
    } else {
      // this.routes.navigate(['/payment' + ]);
    }
  }
}
