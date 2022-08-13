import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
