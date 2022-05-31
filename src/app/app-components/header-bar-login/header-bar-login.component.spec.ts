import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarLoginComponent } from './header-bar-login.component';

describe('HeaderBarComponent', () => {
  let component: HeaderBarLoginComponent;
  let fixture: ComponentFixture<HeaderBarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBarLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
