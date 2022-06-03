import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsFilterComponent } from './artists-filter.component';

describe('ArtistsFilterComponent', () => {
  let component: ArtistsFilterComponent;
  let fixture: ComponentFixture<ArtistsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
