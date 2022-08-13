import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {take} from 'rxjs/operators';

import { Course, Lesson } from '../../common/interfaces';
import { EntitiesViewBase } from '../entities-view-base.component';
import { CoursesViewStore } from './courses-view-store';
import { CoursesService } from 'src/app/services/courses.service';
import { LessonsService } from 'src/app/services/lessons.service';

@Component({
  selector: 'st-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['../entities-view.component.sass'],
  providers: [CoursesViewStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesView extends EntitiesViewBase<Course> implements OnInit {
  allCourses$ = this.coursesViewStore.allEntities$;
  selectedCourse$ = this.coursesViewStore.selectedEntity$;
  coursesTableData$ = this.coursesViewStore.tableData$;
  allLessons$: Observable<Lesson[]> = this.coursesViewStore.allLessons$;

  showCoursesBS = new BehaviorSubject<boolean>(true)

  constructor(readonly coursesViewStore: CoursesViewStore,
              readonly coursesService: CoursesService,
              readonly lessonsService: LessonsService,
    ) { 
    super(coursesViewStore);
  }

  ngOnInit(): void {
    this.initializeView();
  }

  async initializeView() {
    const courses = await this.coursesService.getAllCourses();
    console.log('cV ngOI courses from courses service: ', courses);
    this.setSelectedEntity(courses[0]);
    this.setAllEntities(courses);
    this.setTableData(courses)

    const lessons = await this.lessonsService.getAllLessons();
    console.log('cV ngOI lessons from lessons service: ', lessons);
    this.setAllLessons(lessons);
  }

  setAllLessons(lessons: Lesson[]) {
    this.coursesViewStore.setAllLessons(lessons);
  }

  get shouldShowCourses() {
    return this.showCoursesBS.value;
  }

  toggleView() {
    this.showCoursesBS.next(!this.showCoursesBS.value);
  }
}
