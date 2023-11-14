import {Injectable} from '@angular/core';
import {TextAnalysisResultInterface} from "./text-analysis-result.interface";

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  constructor() {
  }


  analyzeText(text: string, type: 'vowels' | 'consonants' | 'both'): TextAnalysisResultInterface {
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

    switch (type) {
      case "vowels":
        return {vowelsResult, consonantsResult: {}};
      case "consonants":
        return {vowelsResult: {}, consonantsResult};
      case "both":
        return {vowelsResult, consonantsResult};
      default:
        throw new Error("Invalid analysis type. Please try again.");
    }
  }
}
