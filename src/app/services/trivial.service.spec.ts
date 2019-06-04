import { TestBed } from '@angular/core/testing';

import { TrivialService } from './trivial.service';

describe('TrivialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrivialService = TestBed.get(TrivialService);
    expect(service).toBeTruthy();
  });
});
