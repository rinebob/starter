import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesCrud } from './courses-crud/courses-crud.component';

@NgModule({
  declarations: [
    CoursesCrud,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CoursesCrud,
  ],
})
export class EntitiesCrudModule { }
