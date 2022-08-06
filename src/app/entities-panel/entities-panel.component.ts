import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-entities-panel',
  templateUrl: './entities-panel.component.html',
  styleUrls: ['./entities-panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntitiesPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
