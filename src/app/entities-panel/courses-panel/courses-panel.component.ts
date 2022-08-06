import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-courses-panel',
  templateUrl: './courses-panel.component.html',
  styleUrls: ['./courses-panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
