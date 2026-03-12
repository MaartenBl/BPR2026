import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle15 } from './puzzle15';

describe('Puzzle15', () => {
  let component: Puzzle15;
  let fixture: ComponentFixture<Puzzle15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
