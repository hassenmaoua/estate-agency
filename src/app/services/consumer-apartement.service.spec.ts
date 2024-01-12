import { TestBed } from '@angular/core/testing';

import { ConsumerApartementService } from './consumer-apartement.service';

describe('ConsumerApartementService', () => {
  let service: ConsumerApartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerApartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
