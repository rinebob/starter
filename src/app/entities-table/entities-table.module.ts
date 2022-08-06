import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'
import { CoursesTable } from './courses-table/courses-table.component';



@NgModule({
  declarations: [
    CoursesTable
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    CoursesTable
  ]
})
export class EntitiesTableModule { }
