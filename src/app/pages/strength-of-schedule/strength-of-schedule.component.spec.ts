import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthOfScheduleComponent } from './strength-of-schedule.component';

describe('StrengthOfScheduleComponent', () => {
  let component: StrengthOfScheduleComponent;
  let fixture: ComponentFixture<StrengthOfScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthOfScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthOfScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
