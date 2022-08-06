import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
