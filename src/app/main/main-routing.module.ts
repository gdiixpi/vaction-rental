import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ReserveComponent } from './modules/reserve/reserve.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'availability',
        loadChildren: () =>
          import('./modules/availability/availability.module').then(
            (m) => m.AvailabilityModule
          ),
      },
      {
        path: 'property-details',
        loadChildren: () =>
          import('./modules/listings/listings.module').then(
            (m) => m.ListingsModule
          ),
      },
      {
        path: 'reviews',
        loadChildren: () =>
          import('./modules/reviews/reviews.module').then(
            (m) => m.ReviewsModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./modules/blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./modules/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
