import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesView } from './courses-view/courses-view.component';
import { EntitiesPanelModule } from '../entities-panel/entities-panel.module';
import { EntitiesTableModule } from '../entities-table/entities-table.module';



@NgModule({
  declarations: [
    CoursesView
  ],
  imports: [
    CommonModule,
    EntitiesPanelModule,
    EntitiesTableModule,
  ],
  exports: [
    CoursesView
  ]
})
export class EntitiesViewModule { }
