import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle6 } from './puzzle6';

describe('Puzzle6', () => {
  let component: Puzzle6;
  let fixture: ComponentFixture<Puzzle6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
