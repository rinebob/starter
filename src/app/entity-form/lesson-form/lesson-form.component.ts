import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
