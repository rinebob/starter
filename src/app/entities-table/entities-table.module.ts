import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesTable } from './courses-table/courses-table.component';



@NgModule({
  declarations: [
    CoursesTable
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesTable
  ]
})
export class EntitiesTableModule { }
