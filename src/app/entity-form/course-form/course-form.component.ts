import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
