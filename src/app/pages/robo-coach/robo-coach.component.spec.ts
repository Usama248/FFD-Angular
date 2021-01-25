import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboCoachComponent } from './robo-coach.component';

describe('RoboCoachComponent', () => {
  let component: RoboCoachComponent;
  let fixture: ComponentFixture<RoboCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
