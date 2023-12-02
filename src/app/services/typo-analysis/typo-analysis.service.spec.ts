import { TestBed } from '@angular/core/testing';

import { TypoAnalysisService } from './typo-analysis.service';

describe('TypoAnalysisService', () => {
  let service: TypoAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypoAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
