import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesCrudComponent } from './entities-crud-base.component';

describe('EntitiesCrudComponent', () => {
  let component: EntitiesCrudComponent;
  let fixture: ComponentFixture<EntitiesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitiesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
