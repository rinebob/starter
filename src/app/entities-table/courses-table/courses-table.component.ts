import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Course} from '../../common/interfaces';
import { EntitiesTableBase } from '../entities-table-base.component';
import {COURSES_TABLE_COLUMNS} from '../../common/constants';
import {compare} from '../../common/utils';


@Component({
  selector: 'st-courses-table',
  templateUrl: '../entities-table.component.html',
  styleUrls: ['../entities-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesTable extends EntitiesTableBase<Course> {

  constructor() {
    super();
    this.tableColumnsMetadata = COURSES_TABLE_COLUMNS;

    this.inputData$.pipe(takeUntil(this.destroy)).subscribe(data => {
      this.tableDataBS.next(this.sortData(data));  
    });
  }

  sortData(data: Course[]): Course[] {
    const sortedData = data.sort((a, b) => {
      return compare(a.seqNo, b.seqNo, true);
    });

    return sortedData;
  }
}
