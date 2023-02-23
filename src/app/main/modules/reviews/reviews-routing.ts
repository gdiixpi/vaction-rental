import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { ReviewsComponent } from './reviews.component';


const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReviewsRoutingModule { }
