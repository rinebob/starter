import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesTableComponent } from './entities-table.component';
import { CoursesTableComponent } from '../courses-table/courses-table.component';



@NgModule({
  declarations: [
    EntitiesTableComponent,
    CoursesTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntitiesTableModule { }
