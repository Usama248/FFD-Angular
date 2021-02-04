import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboDraftComponent } from './robo-draft.component';

describe('RoboDraftComponent', () => {
  let component: RoboDraftComponent;
  let fixture: ComponentFixture<RoboDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
