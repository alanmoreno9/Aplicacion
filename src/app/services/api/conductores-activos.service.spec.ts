import { TestBed } from '@angular/core/testing';

import { ConductoresActivosService } from './conductores-activos.service';

describe('ConductoresActivosService', () => {
  let service: ConductoresActivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConductoresActivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
