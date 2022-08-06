import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesViewComponent } from './entities-view.component';
import { CoursesViewComponent } from '../courses-view/courses-view.component';



@NgModule({
  declarations: [
    EntitiesViewComponent,
    CoursesViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntitiesViewModule { }
