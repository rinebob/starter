import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import {EntitiesCrudBase} from '../entities-crud-base.component';
import {Course, Lesson} from '../../common/interfaces';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'st-courses-crud',
  templateUrl: '../entities-crud.component.html',
  styleUrls: ['../entities-crud.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCrud extends EntitiesCrudBase<Course>  {
  @Output() readonly saveCourse = new EventEmitter<void>();
  constructor(readonly coursesService: CoursesService) { 
    super(coursesService);
    this.loadButtonText = 'Load courses';
  }

  save() {
    console.log('cC s save called');
    this.saveCourse.emit();
  }

  async makeItHappen() {
    const coursesCollection = 'courses';
    const testCourse: Course = {
      id: 'this-is-a-course-id',
      displayName: 'Another Dude course',
      description: 'Really instructive course',
      longDescription: 'Youre going to learn a lot dude',
      iconUrl: 'this is the icon url',
      seqNo: 88,
      url: 'instructive-course',
      price: 50,
      lessonsCount: 10,
    }

    // console.log('cC mIH collection/testCourse: ', coursesCollection, testCourse);

    // save
    // const docRef = await this.coursesService.saveDocument(coursesCollection, testCourse);

    // save with id
    // await this.coursesService.saveDocumentWithId(coursesCollection, testCourse, testCourse.id);
    

    // update
    // await this.coursesService.updateDocument(coursesCollection, testCourse, 'NLnf3uQxtzsbcOxi3wzp');

    // get
    // const docSnap = await this.coursesService.getDocument(coursesCollection, 'NLnf3uQxtzsbcOxi3wzp');
    // const docSnap = await this.coursesService.getDocument(coursesCollection, 'this-is-a-course-id');
    // console.log('cC mIH get docSnap data: ', docSnap?.data());
    // console.log('cC mIH get docSnap id: ', docSnap?.id);
    
    // list
    // const docs = await this.coursesService.listDocuments(coursesCollection);
    // console.log('cC mIH documents: ', docs);

    const lessonsCollection = 'lessons';
    const testLesson: Lesson = {
      id: 'this-is-a-lesson-id',
      displayName: 'Great lesson',
      seqNo: 88,
      duration: 'duration dude',
      courseId: 'NLnf3uQxtzsbcOxi3wzp',
    }
    
  }
}
