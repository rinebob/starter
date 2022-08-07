import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Course, Lesson } from '../common/interfaces';
import {COURSES, LESSONS} from '../../assets/data/courses_data';
import {convertAuCourseListToStCourseList, convertAuLessonListToStLessonList} from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class CoursesService implements OnInit {

  allCoursesBS = new BehaviorSubject<Course[]>([]);
  allCourses$: Observable<Course[]> = this.allCoursesBS;
  allLessonsBS = new BehaviorSubject<Lesson[]>([]);
  allLesson$: Observable<Lesson[]> = this.allLessonsBS;

  constructor() {
    const courses: Course[] = convertAuCourseListToStCourseList(Object.values(COURSES));
    this.allCoursesBS.next(courses);

    const lessons: Lesson[] = convertAuLessonListToStLessonList(Object.values(LESSONS));
    this.allLessonsBS.next(lessons);

    console.log('cS ctor courses/lessons init: ', this.allCoursesBS.value, this.allLessonsBS.value);
  }

  ngOnInit() {
  }

  getAllCourses() {
    return of(this.allCoursesBS.value);
  }

  getAllLessons() {
    return of(this.allLessonsBS.value);
  }
}
