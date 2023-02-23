import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing';
import { ExtrapagesModule } from 'src/app/pages/extrapages/extrapages.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ExtrapagesModule
  ]
})
export class ContactModule { }
