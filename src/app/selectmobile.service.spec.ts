import { TestBed } from '@angular/core/testing';

import { SelectmobileService } from './selectmobile.service';

describe('SelectmobileService', () => {
  let service: SelectmobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectmobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
