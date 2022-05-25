import { TestBed } from '@angular/core/testing';

import { ArtistDataAccessService } from './artist-data-access.service';

describe('ArtistDataAccessService', () => {
  let service: ArtistDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
