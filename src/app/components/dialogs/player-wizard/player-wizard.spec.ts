import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWizard } from './player-wizard';

describe('PlayerWizard', () => {
  let component: PlayerWizard;
  let fixture: ComponentFixture<PlayerWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerWizard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
