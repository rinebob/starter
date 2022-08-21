import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {EntitiesTableColumn, EntityBase} from '../common/interfaces';

@Component({
  template: ``,
})
export abstract class EntitiesTableBase<T extends EntityBase> implements OnDestroy {
  readonly destroy = new Subject<void>()
  @Input()
  set inputData(inputData: T[]) {
    console.log('eTB @i input table data: ', inputData);
    this.inputDataBS.next(inputData);
    this.setColumns();

  }
  get inputData() {
    return this.inputDataBS.value;
  }
  inputDataBS = new BehaviorSubject<T[]>([]);
  inputData$: Observable<T[]> = this.inputDataBS;

  @Output() readonly selectedEntity = new EventEmitter<T>();

  tableDataBS = new BehaviorSubject<T[]>([]);
  tableData$: Observable<T[]> = this.tableDataBS;

  visibleColumns: string[] = []
  tableColumnsMetadata: EntitiesTableColumn[] = [];

  constructor() { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  setColumns() {
    const columns = Object.values(this.tableColumnsMetadata).map(column => column.name);
    this.visibleColumns = [...columns];
  }

  handleEntitySelection(entity: T) {
    this.selectedEntity.emit(entity);

  }
  
}
