import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToFavsSnackBarComponent } from './added-to-favs-snack-bar.component';

describe('AddedToFavsSnackBarComponent', () => {
  let component: AddedToFavsSnackBarComponent;
  let fixture: ComponentFixture<AddedToFavsSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedToFavsSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedToFavsSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
