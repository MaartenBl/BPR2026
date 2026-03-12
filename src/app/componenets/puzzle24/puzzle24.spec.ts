import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle24 } from './puzzle24';

describe('Puzzle24', () => {
  let component: Puzzle24;
  let fixture: ComponentFixture<Puzzle24>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle24]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle24);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
