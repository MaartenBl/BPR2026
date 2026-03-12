import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle11 } from './puzzle11';

describe('Puzzle11', () => {
  let component: Puzzle11;
  let fixture: ComponentFixture<Puzzle11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
