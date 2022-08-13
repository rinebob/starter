import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    EntityFormComponent,
  ],
})
export class EntityFormModule { }
