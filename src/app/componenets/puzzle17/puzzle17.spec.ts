import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle17 } from './puzzle17';

describe('Puzzle17', () => {
  let component: Puzzle17;
  let fixture: ComponentFixture<Puzzle17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle17]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
