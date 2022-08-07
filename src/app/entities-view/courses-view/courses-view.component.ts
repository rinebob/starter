import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {take} from 'rxjs/operators';

import { Course, Lesson } from '../../common/interfaces';
import { EntitiesViewBase } from '../entities-view-base.component';
import { CoursesViewStore } from './courses-view-store';
import { CoursesService } from 'src/app/services/courses.service';

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

  constructor(readonly coursesViewStore: CoursesViewStore,
              readonly coursesService: CoursesService,
    ) { 
    super(coursesViewStore);
  }

  ngOnInit(): void {
    this.initializeView();
  }

  initializeView() {
    this.coursesService.getAllCourses().pipe().subscribe(courses => {
      console.log('cV ngOI courses from courses service: ', courses);
      this.setSelectedEntity(courses[0]);
      this.setAllEntities(courses);
      this.setTableData(courses)

    });

    this.coursesService.getAllLessons().pipe().subscribe(lessons => {
      console.log('cV ngOI lessons from courses service: ', lessons);
      this.setAllLessons(lessons);
    });
  }

  setAllLessons(lessons: Lesson[]) {
    this.coursesViewStore.setAllLessons(lessons);
  }
}
