import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "./toggle-switch/toggle-switch.component";
import {TextAnalysisService} from "./services/text-analysis/text-analysis.service";
import {TextAnalysisApiService} from "./services/api/text-analysis.service.api";
import { HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ToggleSwitchComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  text: string = '';
  result: Map<string, number> | null = null;
  analysisType: 'vowels' | 'consonants' | 'both' = 'both';
  resultsArray: { text: string, result: Map<string, number> }[] = [];
  isOnline: boolean = false;


  constructor(private textAnalysisService: TextAnalysisService) {
  }

  analyzeText(): void {
    if (this.isOnline) {
    } else {
      this.result = this.textAnalysisService.analyzeText(this.text, this.analysisType);
      this.resultsArray.push({text: this.text, result: this.result});
    }
  }


//analyzeText(): void {
//  if (this.isOnline) {
//    this.textAnalysisApiService.analyzeText(this.text, this.analysisType).subscribe({
//      next: (response) => {
//        this.resultsArray.push({text: this.text, result: new Map(Object.entries(response))});
//      },
//      error: (error) => {
//        console.error('Error calling the analysis API', error);
//      }
//    });
//  } else {
//    this.result = this.textAnalysisService.analyzeText(this.text, this.analysisType);
//    this.resultsArray.push({text: this.text, result: this.result});
//  }
//}

  handleToggle(toggled: boolean) {
    this.isOnline = toggled;
    console.log('Toggle is now: ', toggled);
  }

}
