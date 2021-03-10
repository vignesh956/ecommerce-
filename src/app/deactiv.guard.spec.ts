import { TestBed } from '@angular/core/testing';

import { DeactivGuard } from './deactiv.guard';

describe('DeactivGuard', () => {
  let guard: DeactivGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
