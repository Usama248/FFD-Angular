import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboAuctionHomeComponent } from './robo-auction-home.component';

describe('RoboAuctionHomeComponent', () => {
  let component: RoboAuctionHomeComponent;
  let fixture: ComponentFixture<RoboAuctionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboAuctionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboAuctionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
