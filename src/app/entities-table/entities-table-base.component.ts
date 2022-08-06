import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {EntitiesTableColumn, EntityBase} from '../common/interfaces';
import {compare} from '../common/utils';

@Component({
  template: ``,
})
export abstract class EntitiesTableBase<T extends EntityBase> implements OnInit {
  @Input()
  set tableData(tableData: T[]) {
    this.tableDataBS.next(this.sortData(tableData, 'seqNo'));

  }
  get tableData() {
    return this.tableDataBS.value;
  }
  tableDataBS = new BehaviorSubject<T[]>([]);

  visibleColumns: string[] = []
  tableColumnsMetadata: EntitiesTableColumn[] = [];

  constructor() { }

  ngOnInit(): void {
    const columns = Object.values(this.tableColumnsMetadata).map(column => column.name);
    this.visibleColumns = [...columns];
  }

  sortData(data: T[], column: string): T[] {
    const sortedData = data.sort((a, b) => {
      return compare(a[column], b[column], true);
    });

    return sortedData;

  }

}
