import { TestBed } from '@angular/core/testing';

import { TextorandomService } from './textorandom.service';

describe('TextorandomService', () => {
  let service: TextorandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextorandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
