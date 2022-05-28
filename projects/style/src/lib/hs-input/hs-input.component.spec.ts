import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsInputComponent } from './hs-input.component';

describe('HsInputComponent', () => {
  let component: HsInputComponent;
  let fixture: ComponentFixture<HsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
