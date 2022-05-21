import { TestBed } from '@angular/core/testing';

import { GetArtistsDataService } from './get-artists-data.service';

describe('GetArtistsDataService', () => {
  let service: GetArtistsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetArtistsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
