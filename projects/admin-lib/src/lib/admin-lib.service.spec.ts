import { TestBed, inject } from '@angular/core/testing';

import { AdminLibService } from './admin-lib.service';

describe('AdminLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminLibService]
    });
  });

  it('should be created', inject([AdminLibService], (service: AdminLibService) => {
    expect(service).toBeTruthy();
  }));
});
