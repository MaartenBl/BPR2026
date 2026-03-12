import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle18 } from './puzzle18';

describe('Puzzle18', () => {
  let component: Puzzle18;
  let fixture: ComponentFixture<Puzzle18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle18]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
