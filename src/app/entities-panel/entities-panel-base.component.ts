import {Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityBase } from '../common/interfaces';

@Component({
  template:  ``,
})
export abstract class EntitiesPanelBase<T extends EntityBase>  {
  @Input()
  set selectedEntity(entity: T|undefined) {
    this.selectedEntityBS.next(entity);
  }
  get selectedEntity() {
    return this.selectedEntityBS.value;
  }
  selectedEntityBS = new BehaviorSubject<T|undefined>(undefined);

  @Input()
  set allEntities(entities: T[]) {
    this.allEntitiesBS.next(entities);
  }
  get allEntities() {
    return this.allEntitiesBS.value;
  }
  allEntitiesBS = new BehaviorSubject<T[]>([]);

  @Input()
  set tableData(entities: T[]) {
    this.tableDataBS.next(entities);
  }
  get tableData() {
    return this.tableDataBS.value;
  }
  tableDataBS = new BehaviorSubject<T[]>([]);

  constructor() { }


}
