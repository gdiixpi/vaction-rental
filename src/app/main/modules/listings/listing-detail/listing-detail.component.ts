import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.scss']
})
export class ListingDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOpen(a: any): void {
    // open lightbox
    // this._lightbox.open(this._album, a);
    console.log('open lightbox', a);
  }

  open(index: number): void {
    // open lightbox
    // this._lightbox.open(this._album, index);
    console.log('open lightbox', index);
  }

}
