import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityBase } from '../common/interfaces';
import {CoursesService} from '../services/courses.service';

@Component({
  template: ``,
})
export abstract class EntitiesCrudBase<T extends EntityBase> implements OnInit {

  @Input()
  set allEntities(entities: T[]) {
    this.allEntitiesBS.next(entities);
  }
  get allEntities() {
    return this.allEntitiesBS.value;
  }
  allEntitiesBS = new BehaviorSubject<T[]>([]);

  loadButtonText = '';

  constructor() { }

  ngOnInit(): void {
  }

  loadEntities() {
    // const courses = [...this.allEntitiesBS.value];
  }

}
