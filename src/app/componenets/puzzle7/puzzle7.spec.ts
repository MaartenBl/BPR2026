import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle7 } from './puzzle7';

describe('Puzzle7', () => {
  let component: Puzzle7;
  let fixture: ComponentFixture<Puzzle7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
