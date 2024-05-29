import { TestBed } from '@angular/core/testing';

import { SuinosService } from './suinos.service';

describe('SuinosService', () => {
  let service: SuinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
