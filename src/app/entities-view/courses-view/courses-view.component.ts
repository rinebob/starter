import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Course} from '../../common/interfaces';
import {EntitiesViewBase} from '../entities-view-base.component';

@Component({
  selector: 'st-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['../entities-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesView extends EntitiesViewBase<Course> implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
