import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle9 } from './puzzle9';

describe('Puzzle9', () => {
  let component: Puzzle9;
  let fixture: ComponentFixture<Puzzle9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
