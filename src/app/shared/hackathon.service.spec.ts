/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HackathonService } from './hackathon.service';

describe('Service: Hackathon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackathonService]
    });
  });

  it('should ...', inject([HackathonService], (service: HackathonService) => {
    expect(service).toBeTruthy();
  }));
});
