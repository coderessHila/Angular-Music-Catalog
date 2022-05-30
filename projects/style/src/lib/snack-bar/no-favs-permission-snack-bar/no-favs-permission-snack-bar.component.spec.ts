import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFavsPermissionSnackBarComponent } from './no-favs-permission-snack-bar.component';

describe('NoFavsPermissionSnackBarComponent', () => {
  let component: NoFavsPermissionSnackBarComponent;
  let fixture: ComponentFixture<NoFavsPermissionSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFavsPermissionSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFavsPermissionSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
