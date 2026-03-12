import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle23 } from './puzzle23';

describe('Puzzle23', () => {
  let component: Puzzle23;
  let fixture: ComponentFixture<Puzzle23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle23]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle23);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
