import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { BlogComponent } from './blog.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRoutingModule { }
