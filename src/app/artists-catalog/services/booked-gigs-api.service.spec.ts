import { TestBed } from '@angular/core/testing';

import { BookedGigsApiService } from './booked-gigs-api.service';

describe('BookedGigsService', () => {
  let service: BookedGigsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookedGigsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
