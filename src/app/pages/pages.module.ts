import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Page Routing
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from "../shared/shared.module";

// Light Box
import { LightboxModule } from 'ngx-lightbox';
import { PaymentComponent } from './payment/payment.component';
import { AuthModule } from '../auth/auth.module';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LightboxModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_Ux4ZAgZE2pMRL6DxuJoTpNXW'),
  ]
})
export class PagesModule { }
