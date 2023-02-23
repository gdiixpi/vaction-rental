import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NAVBAR_MENU } from 'src/app/main/navbar-menu';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  public paymentform!: UntypedFormGroup;
  menuItems: any[] = [];
  submit!: boolean;
  public selectDate: any;
  @Input() public finalDate: any;
  fromDate: any;
  endDate: any;
  noOfGuest: any;

  cardOptions: StripeCardElementOptions = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: 'rgba(253, 86, 49, .8)',
        color: '#000000',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {color: '#fce883'},
        '::placeholder': {color: 'rgba(0, 0, 0, .5)'}
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;
  cardError: any;

  constructor(
    private routes: Router,
    private scrollToService: ScrollToService,
    private acRoute: ActivatedRoute,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) { }

  ngOnInit(): void {
    this.menuItems = NAVBAR_MENU;
    this.acRoute.queryParams
      .subscribe(params => {
        this.fromDate = params['startDate'];
        this.endDate = params['endDate'];
        this.noOfGuest = params['noOfGuest'];
      });
    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToService.scrollTo({
          target: '#main-top',
          duration: 1000,
          easing: 'easeInOutQuad',
        });
      }
    });

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.onchange;
  }

  get form() {
    return this.stripeTest.controls;
  }

  navigatePrevious() {
    this.routes.navigate(['/availability'], {
      queryParams: {
        startDate: this.fromDate,
        endDate: this.endDate,
        noOfGuest: this.noOfGuest,
      },
    });
  }

  createToken(): void {
    this.submit = true;
    if (this.stripeTest.invalid) {
      return;
    } else {
      const name = this.stripeTest.get('name').value;
      this.stripeService
        .createToken(this.card.element, { name })
        .subscribe((result) => {
          if (result.token) {
            // Use the token
            alert(result.token.id);
          } else if (result.error) {
            // Error creating the token
            console.log(result.error);
            this.cardError = result.error;
          }
        });
    }
  }

  onchange(value: any) {
    this.selectDate = value;
  }
}
