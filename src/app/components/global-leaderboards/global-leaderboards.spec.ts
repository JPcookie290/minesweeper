import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLeaderboards } from './global-leaderboards';

describe('GlobalLeaderboards', () => {
  let component: GlobalLeaderboards;
  let fixture: ComponentFixture<GlobalLeaderboards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalLeaderboards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalLeaderboards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
