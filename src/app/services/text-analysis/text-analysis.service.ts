import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  constructor() {
  }

  analyzeText(text: string, type: 'vowels' | 'consonants' | 'both'): Map<string, number> {
  switch (type){
    case "vowels":
      return this.countVowels(text);
    case "consonants":
      return this.countConsonants(text);
    case "both":
      return this.countBoth(text);
    default:
      throw new Error("Invalid analyis type. Please try again.")
  }
  }


  private countVowels(text: string): Map<string, number> {
    const vowels = new Map<string, number>();
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    for (const char of text.toLowerCase()) {
      if (vowelSet.has(char)) {
        vowels.set(char, (vowels.get(char) || 0) + 1);
      }

    }
    return vowels;
  }

  private countConsonants(text: string): Map<string, number> {
    const consonants = new Map<string, number>();
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    for (const char of text.toLowerCase()) {
      if (!vowelSet.has(char) && char.match(/[a-z]/i)) {
        consonants.set(char, (consonants.get(char) || 0) + 1);

      }

    }
    return consonants;
  }

  private countBoth(text: string): Map<string,number> {
    const counts = new Map<string, number>();
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    for(const char of text.toLowerCase()){
      if(char.match(/[a-z]/i)){
        counts.set(char, (counts.get(char) || 0) +1)
      }
    }
    return counts;
  }
}
