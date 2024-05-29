import { TestBed } from '@angular/core/testing';

import { BovinosService } from './bovinos.service';

describe('BovinosService', () => {
  let service: BovinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BovinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
