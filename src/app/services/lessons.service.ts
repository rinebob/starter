import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import 'firebase/firestore';

import * as afs from '@angular/fire/firestore';
import {EntitiesServiceBase} from './entities_service_base'
import {Lesson} from '../common/interfaces';
import {LESSONS} from '../../assets/data/courses_data';
import {convertAuLessonListToStLessonList} from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class LessonsService extends EntitiesServiceBase<Lesson> implements OnInit {

  allLessonsBS = new BehaviorSubject<Lesson[]>([]);
  allLessons$: Observable<Lesson[]> = this.allLessonsBS;
  
  constructor(protected readonly firestore: afs.Firestore) {
    super(firestore);

    const lessons: Lesson[] = convertAuLessonListToStLessonList(Object.values(LESSONS));
    this.allLessonsBS.next(lessons);

    console.log('lS ctor lessons init: ', this.allLessonsBS.value);
  }

  ngOnInit() {
  }

  getAllLessons() {
    return of(this.allLessonsBS.value);
  }

}
