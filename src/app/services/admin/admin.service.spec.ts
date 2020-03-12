import { TestBed, inject } from '@angular/core/testing';

import { Adminservice } from './admin.service';

describe('Adminservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Adminservice]
    });
  });

  it('should be created', inject([Adminservice], (service: Adminservice) => {
    expect(service).toBeTruthy();
  }));
});
