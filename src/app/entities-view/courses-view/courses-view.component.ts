import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Course} from '../../common/interfaces';
import {EntitiesViewBase} from '../entities-view-base.component';
import { CoursesViewStore } from './courses-view-store';
import {COURSES} from '../../../assets/data/courses_data';

@Component({
  selector: 'st-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['../entities-view.component.sass'],
  providers: [CoursesViewStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesView extends EntitiesViewBase<Course> implements OnInit {

  constructor(readonly coursesViewStore: CoursesViewStore) { 
    super(coursesViewStore);
  }

  ngOnInit(): void {
    const courses: Course[] = Object.values(COURSES);
    console.log('cV ngOI courses: ', courses);
    this.setAllEntities(courses);
    this.setTableData(courses)
  }

}
