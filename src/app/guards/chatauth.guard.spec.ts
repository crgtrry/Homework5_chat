import { TestBed, async, inject } from '@angular/core/testing';

import { ChatauthGuard } from './chatauth.guard';

describe('ChatauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatauthGuard]
    });
  });

  it('should ...', inject([ChatauthGuard], (guard: ChatauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
