import { TestBed } from '@angular/core/testing';

import { ArtistsStoreService } from './artists-store.service';

describe('ArtistsStateManagementService', () => {
  let service: ArtistsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
