import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
