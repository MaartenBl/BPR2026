import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle21 } from './puzzle21';

describe('Puzzle21', () => {
  let component: Puzzle21;
  let fixture: ComponentFixture<Puzzle21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle21]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
