import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-entities-table',
  templateUrl: './entities-table.component.html',
  styleUrls: ['./entities-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntitiesTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
