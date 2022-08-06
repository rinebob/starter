import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import {EntitiesCrudBase} from '../entities-crud-base.component';
import {Course} from '../../common/interfaces';

@Component({
  selector: 'st-courses-crud',
  templateUrl: '../entities-crud.component.html',
  styleUrls: ['../entities-crud.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCrud extends EntitiesCrudBase<Course>  {
  constructor() { 
    super();
    this.loadButtonText = 'Load courses';
  }
}
