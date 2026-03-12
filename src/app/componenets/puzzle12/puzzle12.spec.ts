import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle12 } from './puzzle12';

describe('Puzzle12', () => {
  let component: Puzzle12;
  let fixture: ComponentFixture<Puzzle12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
