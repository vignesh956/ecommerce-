import { TestBed } from '@angular/core/testing';

import { RactiveGuard } from './ractive.guard';

describe('RactiveGuard', () => {
  let guard: RactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
