import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityFormComponent } from './entity-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';



@NgModule({
  declarations: [
    EntityFormComponent,
    CourseFormComponent,
    LessonFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntityFormModule { }
