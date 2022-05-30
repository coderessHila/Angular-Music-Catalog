import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedFromFavsSnackBarComponent } from './removed-from-favs-snack-bar.component';

describe('RemovedFromFavsSnackBarComponent', () => {
  let component: RemovedFromFavsSnackBarComponent;
  let fixture: ComponentFixture<RemovedFromFavsSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedFromFavsSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovedFromFavsSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
