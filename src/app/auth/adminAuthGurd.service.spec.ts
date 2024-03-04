/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminAuthGurdService } from './adminAuthGurd.service';

describe('Service: AdminAuthGurd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGurdService]
    });
  });

  it('should ...', inject([AdminAuthGurdService], (service: AdminAuthGurdService) => {
    expect(service).toBeTruthy();
  }));
});
