import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboCheatComponent } from './robo-cheat.component';

describe('RoboCheatComponent', () => {
  let component: RoboCheatComponent;
  let fixture: ComponentFixture<RoboCheatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboCheatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboCheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
