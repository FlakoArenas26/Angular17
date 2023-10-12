import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nonAuthGuardTsGuard } from './non-auth.guard.ts.guard';

describe('nonAuthGuardTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nonAuthGuardTsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
