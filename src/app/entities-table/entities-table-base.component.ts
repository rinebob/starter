import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {EntityBase} from '../common/interfaces';

@Component({
  template: ``,
})
export abstract class EntitiesTableBase<T extends EntityBase> implements OnInit {
  @Input()
  set tableData(tableData: T[]) {
    this.tableDataBS.next(tableData);

  }
  get tableData() {
    return this.tableDataBS.value;
  }
  tableDataBS = new BehaviorSubject<T[]>([]);

  constructor() { }

  ngOnInit(): void {
  }

}
