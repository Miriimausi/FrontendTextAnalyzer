import {TestBed} from '@angular/core/testing';

import {TextAnalysisService} from './text-analysis.service';
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

  it('should count vowels correctly', () => {
    const result = service.analyzeText('Hello', AnalysisType.Vowels);
    expect(result.vowelsResult['e']).toEqual(1);
    expect(Object.keys(result.consonantsResult).length).toEqual(0);
  });

  it('should count consonants correctly', () => {
    const result = service.analyzeText('test', AnalysisType.Consonants);
    expect(result.consonantsResult['t']).toEqual(2);
    expect(Object.keys(result.vowelsResult).length).toEqual(0);
  });

  it('should count both vowels and consonants correctly', () => {
    const result = service.analyzeText('This is a test', AnalysisType.Both);
    expect(result.vowelsResult['e']).toEqual(1);
    expect(result.consonantsResult['t']).toEqual(3);
  });

  it('should not count numbers or special characters', () => {
    const result = service.analyzeText('test123!@#', AnalysisType.Both);
    expect(result.vowelsResult['e']).toEqual(1);
    expect(result.consonantsResult['t']).toEqual(2);
    expect(result.vowelsResult['1']).toBeUndefined();
    expect(result.consonantsResult['!']).toBeUndefined();
  });

  it('should handle uppercase letters', () => {
    const result = service.analyzeText('Test Input', AnalysisType.Both);
    expect(result.vowelsResult['e']).toEqual(1);
    expect(result.consonantsResult['t']).toEqual(3); // 'T' in 'Test' and 't' in 'Input'
  });

  it('should handle super long words in combination with other words', () => {
    const result = service.analyzeText('pneumonoultramicroscopicsilicovolcanoconiosis is a type of a lung disease', AnalysisType.Both)
    expect(result.vowelsResult['i']).toEqual(8);
    expect(result.consonantsResult['t']).toEqual(2); // 'T' in 'Test' and 't' in 'Input'
  });


  it('should handle empty string correctly', () => {
    const result = service.analyzeText('', AnalysisType.Both);
    expect(Object.keys(result.vowelsResult).length).toEqual(0);
    expect(Object.keys(result.consonantsResult).length).toEqual(0);
  });


});

