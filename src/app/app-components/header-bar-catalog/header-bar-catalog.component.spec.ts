import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarCatalogComponent } from './header-bar-catalog.component';

describe('HeaderBarCatalogComponent', () => {
  let component: HeaderBarCatalogComponent;
  let fixture: ComponentFixture<HeaderBarCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBarCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
