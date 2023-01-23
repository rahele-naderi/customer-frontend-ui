import { TestBed } from '@angular/core/testing';

import { CustomerActionService } from './customer-action.service';

describe('CustomerActionService', () => {
  let service: CustomerActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
