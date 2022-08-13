import {Injectable} from '@angular/core';
import 'firebase/firestore';
import * as afs from '@angular/fire/firestore';
import {EntitiesServiceBase} from './entities_service_base'
import {Course} from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends EntitiesServiceBase<Course> {
  constructor(protected readonly firestore: afs.Firestore) {
    super(firestore);
  }

  async getAllCourses() {
    return await this.listDocuments('courses');
  }
}
