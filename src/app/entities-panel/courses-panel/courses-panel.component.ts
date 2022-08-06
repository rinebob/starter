import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Course} from '../../common/interfaces';
import { EntitiesPanel } from '../entities-panel.component';

@Component({
  selector: 'st-courses-panel',
  templateUrl: './courses-panel.component.html',
  styleUrls: ['./courses-panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesPanel extends EntitiesPanel<Course> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
