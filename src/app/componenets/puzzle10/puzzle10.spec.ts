import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle10 } from './puzzle10';

describe('Puzzle10', () => {
  let component: Puzzle10;
  let fixture: ComponentFixture<Puzzle10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
