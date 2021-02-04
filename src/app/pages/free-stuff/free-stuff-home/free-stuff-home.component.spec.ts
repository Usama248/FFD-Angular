import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeStuffHomeComponent } from './free-stuff-home.component';

describe('FreeStuffHomeComponent', () => {
  let component: FreeStuffHomeComponent;
  let fixture: ComponentFixture<FreeStuffHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeStuffHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeStuffHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
