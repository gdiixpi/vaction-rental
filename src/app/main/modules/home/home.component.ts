import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { pagerData } from 'src/app/pages/dashboard/home2/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // set the initial view to the month view
    weekends: true, // show weekends
    editable: true, // allow events to be dragged and resized
    selectable: true, // allow date ranges to be selected
    events: [
      {
        title: 'Event 1',
        start: '2022-01-01',
        end: '2022-01-05',
      },
      {
        title: 'Event 2',
        start: '2022-01-07',
        end: '2022-01-10',
      }
    ]
  };

  pagerData = pagerData;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  selectDepartureDate(event: any) {
    console.log(event);
  }

  selectArrivalDate(event: any) {
    console.log(event);
  }

    /**
   * Open modal
   * @param content modal content
   */
    openModal(content: any) {
      this.modalService.open(content, { centered: true });
    }

}
