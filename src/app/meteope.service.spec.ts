import { TestBed } from '@angular/core/testing';

import { MeteopeService } from './meteope.service';

describe('MeteopeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeteopeService = TestBed.get(MeteopeService);
    expect(service).toBeTruthy();
  });
});
