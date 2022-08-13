import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import {EntitiesCrudBase} from '../entities-crud-base.component';
import {Course, Lesson} from '../../common/interfaces';
import {CoursesService} from '../../services/courses.service';
import {LessonsService} from '../../services/lessons.service';

@Component({
  selector: 'st-courses-crud',
  templateUrl: '../entities-crud.component.html',
  styleUrls: ['../entities-crud.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCrud extends EntitiesCrudBase<Course>  {
  @Output() readonly saveCourse = new EventEmitter<void>();
  constructor(readonly coursesService: CoursesService,
              readonly lessonsService: LessonsService,
    ) { 
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
      id: '',
      displayName: 'Such a great lesson',
      seqNo: 89,
      duration: 'long duration dude',
      courseId: 'NLnf3uQxtzsbcOxi3wzp',
    }

    // console.log('cC mIH collection/testLesson: ', lessonsCollection, testLesson);

    // save
    // const docRef = await this.lessonsService.saveDocument(lessonsCollection, testLesson);

    // save with id
    // await this.lessonsService.saveDocumentWithId(lessonsCollection, testLesson, testLesson.id);
    

    // update
    // await this.lessonsService.updateDocument(lessonsCollection, testLesson, '9AD6KlqR5R3RaQIzbWx6');

    // get
    // const docSnap = await this.lessonsService.getDocument(lessonsCollection, '9AD6KlqR5R3RaQIzbWx6');
    // const docSnap = await this.lessonsService.getDocument(lessonsCollection, 'this-is-a-lesson-id');
    // console.log('cC mIH get docSnap data: ', docSnap?.data());
    // console.log('cC mIH get docSnap id: ', docSnap?.id);
    
    // list
    // const docs = await this.lessonsService.listDocuments(lessonsCollection);
    // console.log('cC mIH documents: ', docs);
    
  }
}
