import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mouse } from './mouse';

describe('Mouse', () => {
  let component: Mouse;
  let fixture: ComponentFixture<Mouse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mouse],
    }).compileComponents();

    fixture = TestBed.createComponent(Mouse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
