import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle13 } from './puzzle13';

describe('Puzzle13', () => {
  let component: Puzzle13;
  let fixture: ComponentFixture<Puzzle13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
