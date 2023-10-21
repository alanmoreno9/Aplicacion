import { TestBed } from '@angular/core/testing';

import { RutaSolicitudesService } from './ruta-solicitudes.service';

describe('RutaSolicitudesService', () => {
  let service: RutaSolicitudesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutaSolicitudesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
