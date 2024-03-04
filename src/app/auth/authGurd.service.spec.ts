/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGurdService } from './authGurd.service';

describe('Service: AuthGurd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGurdService]
    });
  });

  it('should ...', inject([AuthGurdService], (service: AuthGurdService) => {
    expect(service).toBeTruthy();
  }));
});
