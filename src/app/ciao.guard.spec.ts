import { TestBed } from '@angular/core/testing';

import { CiaoGuard } from './ciao.guard';

describe('CiaoGuard', () => {
  let guard: CiaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CiaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
