import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {EntityBase} from '../common/interfaces';

@Component({
  template: ``,
})
export abstract class EntitiesTableBase<T extends EntityBase> implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
