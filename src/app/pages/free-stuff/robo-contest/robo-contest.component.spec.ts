import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboContestComponent } from './robo-contest.component';

describe('RoboContestComponent', () => {
  let component: RoboContestComponent;
  let fixture: ComponentFixture<RoboContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboContestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
