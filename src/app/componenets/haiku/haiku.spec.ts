import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Haiku } from './haiku';

describe('Haiku', () => {
  let component: Haiku;
  let fixture: ComponentFixture<Haiku>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Haiku]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Haiku);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
