import { TestBed, async, inject } from '@angular/core/testing';

import { ArchitectureAuthGuardGuard } from './architecture-auth-guard.guard';

describe('ArchitectureAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchitectureAuthGuardGuard]
    });
  });

  it('should ...', inject([ArchitectureAuthGuardGuard], (guard: ArchitectureAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
