import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { VendorModule } from 'src/app/pages/vendor/vendor.module';
import { ReviewsRoutingModule } from './reviews-routing';



@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    VendorModule
  ]
})
export class ReviewsModule { }
