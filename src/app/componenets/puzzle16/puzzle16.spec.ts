import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle16 } from './puzzle16';

describe('Puzzle16', () => {
  let component: Puzzle16;
  let fixture: ComponentFixture<Puzzle16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzzle16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
