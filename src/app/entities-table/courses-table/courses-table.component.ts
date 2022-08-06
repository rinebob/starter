import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Course} from '../../common/interfaces';
import { EntitiesTableBase } from '../entities-table-base.component';

@Component({
  selector: 'st-courses-table',
  templateUrl: '../entities-table.component.html',
  styleUrls: ['../entities-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesTable extends EntitiesTableBase<Course> {

  constructor() {
    super();
  }
}
