import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPanerl } from './player-panerl';

describe('PlayerPanerl', () => {
  let component: PlayerPanerl;
  let fixture: ComponentFixture<PlayerPanerl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerPanerl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerPanerl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
