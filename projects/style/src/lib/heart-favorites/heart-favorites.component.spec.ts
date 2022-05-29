import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartFavoritesComponent } from './heart-favorites.component';

describe('HeartFavoritesComponent', () => {
  let component: HeartFavoritesComponent;
  let fixture: ComponentFixture<HeartFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
