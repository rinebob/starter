import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Course} from '../../common/interfaces';
import {EntitiesView} from '../entities-view.component';

@Component({
  selector: 'st-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['../entities-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesView extends EntitiesView<Course> implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
