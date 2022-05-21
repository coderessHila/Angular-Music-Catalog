import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewArtistComponent } from './preview-artist.component';

describe('PreviewArtistComponent', () => {
  let component: PreviewArtistComponent;
  let fixture: ComponentFixture<PreviewArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
