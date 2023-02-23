import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ListingsRoutingModule } from './listings-routing';
import { CatalogModule } from 'src/app/pages/catalog/catalog.module';



@NgModule({
  declarations: [
    ListingDetailComponent
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,
    CatalogModule
  ]
})
export class ListingsModule { }
