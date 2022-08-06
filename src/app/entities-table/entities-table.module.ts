import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesTableComponent } from './courses-table/courses-table.component';



@NgModule({
  declarations: [
    CoursesTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesTableComponent
  ]
})
export class EntitiesTableModule { }
