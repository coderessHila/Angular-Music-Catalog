import { TestBed } from '@angular/core/testing';

import { AuthGuardGuestsService } from './auth-guard-guests.service';

describe('AuthGuardService', () => {
  let service: AuthGuardGuestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardGuestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
