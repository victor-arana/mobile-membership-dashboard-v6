import { TestBed } from '@angular/core/testing';

import { TransactionDistributionService } from './transaction-distribution.service';

describe('TransactionDistributionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionDistributionService = TestBed.get(TransactionDistributionService);
    expect(service).toBeTruthy();
  });
});
