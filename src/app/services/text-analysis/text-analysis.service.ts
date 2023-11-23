import {Injectable} from '@angular/core';
import {TextAnalysisResultInterface} from "./text-analysis-result.interface";
import {Observable, of} from "rxjs";
import {AnalysisType} from "../../enums/analysis-type.enum";

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {
  constructor() {
  }

  analyzeText(text: string, analysisType: AnalysisType): Observable<TextAnalysisResultInterface> {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    const vowelsResult: { [key: string]: number } = {};
    const consonantsResult: { [key: string]: number } = {};

    for (const char of text.toLowerCase()) {
      if (vowelSet.has(char)) {
        vowelsResult[char] = (vowelsResult[char] || 0) + 1;
      } else if (char.match(/[a-z]/i)) {
        consonantsResult[char] = (consonantsResult[char] || 0) + 1;
      }
    }

    let result: TextAnalysisResultInterface;

    switch (analysisType) {
      case AnalysisType.Vowels:
        result = { vowelsResult, consonantsResult: {} };
        break;
      case AnalysisType.Consonants:
        result = { vowelsResult: {}, consonantsResult };
        break;
      case AnalysisType.Both:
        result = { vowelsResult, consonantsResult };
        break;
    }


    return of(result);
  }
}
