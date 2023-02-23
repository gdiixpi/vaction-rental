import { Component, OnInit } from '@angular/core';
import { FaqData, FAQ_DATA } from './faq.data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: FaqData[] = []
  constructor() { }

  ngOnInit(): void {
    this.faqs = FAQ_DATA;
  }

}
