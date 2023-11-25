import {Injectable} from '@angular/core';
import {TextAnalysisResultInterface} from "./text-analysis-result.interface";
import {AnalysisType} from "../../enums/analysis-type.enum";

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {
  constructor() {
  }

  analyzeText(text: string, analysisType: AnalysisType): TextAnalysisResultInterface {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelsResult: { [key: string]: number } = {};
    let consonantsResult: { [key: string]: number } = {};

    switch (analysisType) {
      case AnalysisType.Vowels:
        vowelsResult = this.countCharacters(text, vowelSet, true);
        break;
      case AnalysisType.Consonants:
        consonantsResult = this.countCharacters(text, vowelSet, false);
        break;
      case AnalysisType.Both:
        vowelsResult = this.countCharacters(text, vowelSet, true);
        consonantsResult = this.countCharacters(text, vowelSet, false);
        break;
    }

    return {vowelsResult, consonantsResult};
  }

  countCharacters(text: string, charSet: Set<string>, isVowel: boolean): { [key: string]: number } {
    const result: { [key: string]: number } = {};
    for (const char of text.toLowerCase()) {
      if (isVowel ? charSet.has(char) : !charSet.has(char) && char.match(/[a-z]/i)) {
        result[char] = (result[char] || 0) + 1;
      }
    }
    return result;
  }

}
