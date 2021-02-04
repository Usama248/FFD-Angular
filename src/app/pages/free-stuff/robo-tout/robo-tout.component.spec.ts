import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboToutComponent } from './robo-tout.component';

describe('RoboToutComponent', () => {
  let component: RoboToutComponent;
  let fixture: ComponentFixture<RoboToutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboToutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboToutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
