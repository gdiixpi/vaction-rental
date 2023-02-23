import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss'],
})
export class ReserveComponent implements OnInit {
  getbookdata!: FormGroup;
  submit!: boolean;
  @Output() public reserve = new EventEmitter<any>();
  customStartDate: any;
  reserveDate: any = [];
  customEndDate: any;
  today: any;
  endDate: any;
  fromDate: any;
  noOfGuest: any;
  dataStart: any;
  dataEnd: any;
  newEndDate: any;
  endTimeBefore = '23:59:00';
  dateEventCount: number = 0;

  constructor(
    private routes: Router,
    private api: EventService,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.acRoute.queryParams.subscribe((params) => {
      this.fromDate = params['startDate'];
      this.endDate = params['endDate'];
      this.noOfGuest = params['noOfGuest'];
    });

    this.getbookdata = new FormGroup({
      startDate: new FormControl('', Validators.required),
      noOfGuest: new FormControl('', Validators.required),
    });
    this.today = new Date();
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpheWpvaG5zb24zOEBnbWFpbC5jb20iLCJ1c2VySWQiOiI2M2IwMmU1YWU5ZjM1Y2YxZmM1NWI0NzUiLCJpYXQiOjE2NzI1MjE1OTIsImV4cCI6MTY3MjUyNTE5Mn0.NSfpzXArWCIwhzrKbyjx8pyi0_P11kO_RERgwIuWEcU'
    );

    if (this.fromDate != undefined && this.endDate != undefined) {
      if (this.fromDate === this.endDate) {
        this.newEndDate = this.endDate;
      } else {
        this.newEndDate = this.endDate + 'T' + this.endTimeBefore;
      }
      this.reserveDate = {
        title: 'Booked',
        start: this.fromDate,
        end: this.newEndDate,
      };
      this.reserve.emit(this.reserveDate);
    }
    this.setValue();
  }

  setValue() {
    if (this.fromDate != undefined && this.endDate != undefined) {
      this.getbookdata
        .get('startDate')
        .setValue(this.fromDate + ' to ' + this.endDate);
      this.getbookdata.get('noOfGuest').setValue(this.noOfGuest || '');
    }
  }

  handleSDate(event: any) {
    this.customStartDate = event.target.value.split(' ')[0];
    this.customEndDate = event.target.value.split(' ')[2];
    this.dateEventCount = this.dateEventCount + 1;
    if (this.customEndDate == undefined) {
      this.reserveDate = {
        title: 'Booked',
        start: this.customStartDate,
        end: this.customStartDate,
      };
      if (this.dateEventCount == 2) {
        this.reserve.emit(this.reserveDate);
        this.onClose();
      }
    } else if (this.customStartDate != this.customEndDate) {
      this.reserveDate = {
        title: 'Booked',
        start: this.customStartDate,
        end: this.customEndDate + 'T' + this.endTimeBefore,
      };
      this.onClose();
      this.reserve.emit(this.reserveDate);
    }

    this.dataStart = this.reserveDate.start;
    this.dataEnd = formatDate(this.reserveDate.end, 'yyyy-MM-dd', 'en-US');
  }

  onClose() {
    if (this.dateEventCount >= 2) {
      this.dateEventCount = 0;
    }
  }

  onOpen() {
    this.dateEventCount = 0;
  }

  validSubmit() {
    this.submit = true;
    let { value } = this.getbookdata;
    var data = {
      startDate: this.dataStart,
      endDate: this.dataEnd,
    };
    if (this.getbookdata.invalid) {
      return;
    } else {
      this.api
        .postPublic(
          'api/listings/' + '63ab4364075bd5e2ebd6341e' + '/bookings',
          data
        )
        .subscribe({
          next: (data) => {},
        });
      this.routes.navigate(['/payment', '63ab4364075bd5e2ebd6341e'], {
        queryParams: {
          startDate: data.startDate,
          endDate: data.endDate,
          noOfGuest: value.noOfGuest,
        },
      });
    }
  }

  get form() {
    return this.getbookdata.controls;
  }
}
