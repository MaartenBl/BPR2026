import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle20 } from './puzzle20';

describe('Puzzle20', () => {
  let component: Puzzle20;
  let fixture: ComponentFixture<Puzzle20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
