import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle14 } from './puzzle14';

describe('Puzzle14', () => {
  let component: Puzzle14;
  let fixture: ComponentFixture<Puzzle14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
