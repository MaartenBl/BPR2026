import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle19 } from './puzzle19';

describe('Puzzle19', () => {
  let component: Puzzle19;
  let fixture: ComponentFixture<Puzzle19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
