import { TestBed } from '@angular/core/testing';

import { ServiceProvaService } from './service-prova.service';

describe('ServiceProvaService', () => {
  let service: ServiceProvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
