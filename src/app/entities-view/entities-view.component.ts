import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-entities-view',
  templateUrl: './entities-view.component.html',
  styleUrls: ['./entities-view.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntitiesViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
