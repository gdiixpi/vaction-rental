import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ExtrapagesModule } from 'src/app/pages/extrapages/extrapages.module';
import { BlogRoutingModule } from './blog-routing';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ExtrapagesModule
  ]
})
export class BlogModule { }
