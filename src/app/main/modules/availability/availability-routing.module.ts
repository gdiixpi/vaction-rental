import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { AvailabilityComponent } from './availability.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AvailabilityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailabilityRoutingModule {}
