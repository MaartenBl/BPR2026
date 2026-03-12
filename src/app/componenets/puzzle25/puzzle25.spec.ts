import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle25 } from './puzzle25';

describe('Puzzle25', () => {
  let component: Puzzle25;
  let fixture: ComponentFixture<Puzzle25>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle25]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle25);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
