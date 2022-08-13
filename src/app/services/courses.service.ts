import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import 'firebase/firestore';

import * as afs from '@angular/fire/firestore';
import {EntitiesServiceBase} from './entities_service_base'
import {Course} from '../common/interfaces';
import {COURSES} from '../../assets/data/courses_data';
import {convertAuCourseListToStCourseList} from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends EntitiesServiceBase<Course> implements OnInit {

  allCoursesBS = new BehaviorSubject<Course[]>([]);
  allCourses$: Observable<Course[]> = this.allCoursesBS;
  
  constructor(protected readonly firestore: afs.Firestore) {
    super(firestore);
    const courses: Course[] = convertAuCourseListToStCourseList(Object.values(COURSES));
    this.allCoursesBS.next(courses);

    console.log('cS ctor courses init: ', this.allCoursesBS.value);
  }

  ngOnInit() {
  }

  getAllCourses() {
    return of(this.allCoursesBS.value);
  }
}
