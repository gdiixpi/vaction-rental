import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing';
import { ExtrapagesModule } from 'src/app/pages/extrapages/extrapages.module';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    ExtrapagesModule
  ]
})
export class FaqModule { }
