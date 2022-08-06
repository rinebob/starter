import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Course} from '../../common/interfaces';
import { EntitiesPanelBase } from '../entities-panel-base.component';

@Component({
  selector: 'st-courses-list-panel',
  templateUrl: './courses-list-panel.component.html',
  styleUrls: ['../entities-panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListPanel extends EntitiesPanelBase<Course> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
