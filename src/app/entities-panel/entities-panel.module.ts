import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPanelComponent } from './courses-panel/courses-panel.component';



@NgModule({
  declarations: [
    CoursesPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesPanelComponent
  ]
})
export class EntitiesPanelModule { }
