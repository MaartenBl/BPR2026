import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle5 } from './puzzle5';

describe('Puzzle5', () => {
  let component: Puzzle5;
  let fixture: ComponentFixture<Puzzle5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
