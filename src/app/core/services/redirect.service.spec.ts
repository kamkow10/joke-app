import { TestBed } from '@angular/core/testing';

import { RedirectService } from './redirect.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('RedirectService', () => {
  let service: RedirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    service = TestBed.inject(RedirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
