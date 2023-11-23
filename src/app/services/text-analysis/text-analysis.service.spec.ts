import { TestBed } from '@angular/core/testing';

import { TextAnalysisService } from './text-analysis.service';
import {AnalysisType} from "../../enums/analysis-type.enum";

describe('TextAnalysisService', () => {
  let service: TextAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should count vowels correctly', (done) => {
    service.analyzeText('Hello', AnalysisType.Vowels).subscribe(result => {
      expect(result.vowelsResult['e']).toEqual(1);
      expect(Object.keys(result.consonantsResult).length).toEqual(0);
      done();
    });
  });

  it('should count consonants correctly', (done) => {
    service.analyzeText('test', AnalysisType.Consonants).subscribe(result => {
      expect(result.consonantsResult['t']).toEqual(2);
      expect(Object.keys(result.vowelsResult).length).toEqual(0);
      done();
    });
  });

  it('should count both vowels and consonants correctly', (done) => {
    service.analyzeText('This is a test', AnalysisType.Both).subscribe(result => {
      expect(result.vowelsResult['e']).toEqual(1);
      expect(result.consonantsResult['t']).toEqual(3);
      done();
    });
  });

  it('should not count numbers or special characters', (done) => {
    service.analyzeText('test123!@#', AnalysisType.Both).subscribe(result => {
      expect(result.vowelsResult['e']).toEqual(1);
      expect(result.consonantsResult['t']).toEqual(2);
      expect(result.vowelsResult['1']).toBeUndefined();
      expect(result.consonantsResult['!']).toBeUndefined();
      done();
    });
  });

  it('should handle uppercase letters', (done) => {
    service.analyzeText('Test Input', AnalysisType.Both).subscribe(result => {
      expect(result.vowelsResult['e']).toEqual(1);
      expect(result.consonantsResult['t']).toEqual(3); // 'T' in 'Test' and 't' in 'Input'
      done();
    });
  });

  it('should handle super long words in combination with other words', (done) => {
    service.analyzeText('pneumonoultramicroscopicsilicovolcanoconiosis is a type of a lung disease', AnalysisType.Both).subscribe(result => {
      expect(result.vowelsResult['i']).toEqual(8);
      expect(result.consonantsResult['t']).toEqual(2); // 'T' in 'Test' and 't' in 'Input'
      done();
    });
  });


});
