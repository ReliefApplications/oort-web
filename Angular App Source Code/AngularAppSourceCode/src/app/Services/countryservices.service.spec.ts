import { TestBed } from '@angular/core/testing';

import { CountryservicesService } from './countryservices.service';

describe('CountryservicesService', () => {
  let service: CountryservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
