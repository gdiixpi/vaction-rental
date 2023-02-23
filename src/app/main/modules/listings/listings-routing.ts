import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { ListingDetailComponent } from './listing-detail/listing-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ListingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListingsRoutingModule { }
