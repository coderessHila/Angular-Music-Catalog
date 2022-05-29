import { TestBed } from '@angular/core/testing';

import { ArtistsApiService } from './artists-api.service';

describe('ArtistDataAccessService', () => {
  let service: ArtistsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
