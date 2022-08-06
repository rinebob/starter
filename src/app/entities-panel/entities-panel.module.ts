import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListPanel } from './courses-list-panel/courses-list-panel.component';
import { EntitiesTableModule } from '../entities-table/entities-table.module';



@NgModule({
  declarations: [
    CoursesListPanel
  ],
  imports: [
    CommonModule,
    EntitiesTableModule,
  ],
  exports: [
    CoursesListPanel
  ]
})
export class EntitiesPanelModule { }
