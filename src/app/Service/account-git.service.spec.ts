import { TestBed } from '@angular/core/testing';

import { AccountGitService } from './account-git.service';

describe('AccountGitService', () => {
  let service: AccountGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
