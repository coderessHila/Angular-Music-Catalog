import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAfterSubmitComponent } from './booking-after-submit.component';

describe('BookingAfterSubmitComponent', () => {
  let component: BookingAfterSubmitComponent;
  let fixture: ComponentFixture<BookingAfterSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingAfterSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAfterSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
