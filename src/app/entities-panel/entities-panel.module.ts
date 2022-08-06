import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPanel } from './courses-panel/courses-panel.component';
import { EntitiesTableModule } from '../entities-table/entities-table.module';



@NgModule({
  declarations: [
    CoursesPanel
  ],
  imports: [
    CommonModule,
    EntitiesTableModule,
  ],
  exports: [
    CoursesPanel
  ]
})
export class EntitiesPanelModule { }
