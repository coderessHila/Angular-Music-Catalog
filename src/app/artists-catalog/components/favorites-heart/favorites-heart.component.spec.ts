import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesHeartComponent } from './favorites-heart.component';

describe('FavoritesHeartComponent', () => {
  let component: FavoritesHeartComponent;
  let fixture: ComponentFixture<FavoritesHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesHeartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
