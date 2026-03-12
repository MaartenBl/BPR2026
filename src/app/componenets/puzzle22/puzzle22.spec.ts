import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle22 } from './puzzle22';

describe('Puzzle22', () => {
  let component: Puzzle22;
  let fixture: ComponentFixture<Puzzle22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle22]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
