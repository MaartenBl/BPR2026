import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle8 } from './puzzle8';

describe('Puzzle8', () => {
  let component: Puzzle8;
  let fixture: ComponentFixture<Puzzle8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
