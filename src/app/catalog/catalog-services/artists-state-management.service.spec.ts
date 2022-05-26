import { TestBed } from '@angular/core/testing';

import { ArtistsStateManagementService } from './artists-state-management.service';

describe('ArtistsStateManagementService', () => {
  let service: ArtistsStateManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistsStateManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
