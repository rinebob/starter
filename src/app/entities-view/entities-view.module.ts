import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesView } from './courses-view/courses-view.component';
import { EntitiesCrudModule } from '../entities-crud/entities-crud.module';
import { EntitiesPanelModule } from '../entities-panel/entities-panel.module';
import { EntitiesTableModule } from '../entities-table/entities-table.module';
import { EntityFormModule } from '../entity-form/entity-form.module';


@NgModule({
  declarations: [
    CoursesView
  ],
  imports: [
    CommonModule,
    EntitiesCrudModule,
    EntitiesPanelModule,
    EntitiesTableModule,
    EntityFormModule,
  ],
  exports: [
    CoursesView
  ]
})
export class EntitiesViewModule { }
