import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesPanelComponent } from './entities-panel-base.component';

describe('EntitiesPanelComponent', () => {
  let component: EntitiesPanelComponent;
  let fixture: ComponentFixture<EntitiesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitiesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
