import {Injectable} from '@angular/core';
import 'firebase/firestore';
import * as afs from '@angular/fire/firestore';
import {EntitiesServiceBase} from './entities_service_base'
import {Lesson} from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LessonsService extends EntitiesServiceBase<Lesson> {

  constructor(protected readonly firestore: afs.Firestore) {
    super(firestore);
  }

  async getAllLessons() {
    return await this.listDocuments('lessons');
  }
}
