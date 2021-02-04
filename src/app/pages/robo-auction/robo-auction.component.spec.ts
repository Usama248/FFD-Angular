import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboAuctionComponent } from './robo-auction.component';

describe('RoboAuctionComponent', () => {
  let component: RoboAuctionComponent;
  let fixture: ComponentFixture<RoboAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
