import { TestBed } from '@angular/core/testing';

import { SimilarDocsService } from './similar-docs.service';

describe('SimilarDocsService', () => {
  let service: SimilarDocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimilarDocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
