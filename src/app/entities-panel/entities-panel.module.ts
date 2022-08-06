import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesPanelComponent } from './entities-panel.component';
import { CoursesPanelComponent } from '../courses-panel/courses-panel.component';



@NgModule({
  declarations: [
    EntitiesPanelComponent,
    CoursesPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntitiesPanelModule { }
