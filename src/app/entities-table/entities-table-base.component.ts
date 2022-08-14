import { Component, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {EntitiesTableColumn, EntityBase} from '../common/interfaces';

@Component({
  template: ``,
})
export abstract class EntitiesTableBase<T extends EntityBase> implements OnDestroy {
  readonly destroy = new Subject<void>()
  @Input()
  set tableData(tableData: T[]) {
    this.tableDataBS.next(tableData);
    this.setColumns();

  }
  get tableData() {
    return this.tableDataBS.value;
  }
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
  
}
