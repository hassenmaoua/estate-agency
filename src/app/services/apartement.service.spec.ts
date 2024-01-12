import { TestBed } from '@angular/core/testing';

import { ApartementService } from './apartement.service';

describe('ApartementService', () => {
  let service: ApartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
