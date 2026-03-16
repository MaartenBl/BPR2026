import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle26 } from './puzzle26';

describe('Puzzle26', () => {
  let component: Puzzle26;
  let fixture: ComponentFixture<Puzzle26>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle26]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle26);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
