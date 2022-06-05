import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarGuestComponent } from './header-bar-guest.component';

describe('HeaderBarComponent', () => {
  let component: HeaderBarGuestComponent;
  let fixture: ComponentFixture<HeaderBarGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBarGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
