import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "../ui-components/toggle-switch/toggle-switch.component";
import {AnalysisType} from "../enums/analysis-type.enum";
import {TextAnalysisResultInterface} from "../services/text-analysis/text-analysis-result.interface";
import {TextAnalysisService} from "../services/text-analysis/text-analysis.service";
import {TextAnalysisApiService} from "../services/api/text-analysis.service.api";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

// uses the TextAnalysisApiService to call the REST api
@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ToggleSwitchComponent, HttpClientModule],
  templateUrl: './text-analyzer.component.html',
  styleUrl: './text-analyzer.component.css',
  providers: [TextAnalysisApiService],

})


export class TextAnalyzerComponent {
  text: string = '';
  resultsArray: Array<{ text: string, result: TextAnalysisResultInterface }> = [];
  isOnline: boolean = false;
  errorMessage: string = '';
  selectedAnalysisType: AnalysisType = AnalysisType.Both;
  analysisTypeOptions: string[] = Object.keys(AnalysisType).map(k => AnalysisType[k as keyof typeof AnalysisType]);

  constructor(private textAnalysisService: TextAnalysisService, private textAnalysisApiService: TextAnalysisApiService) {
  }

  // When online the call the API service
  // When offline call the local service
  analyzeText(): void {

    if (this.isOnline) {
      this.textAnalysisApiService.analyzeText(this.text, this.selectedAnalysisType)
        .subscribe({
          next: (response) => {
            this.resultsArray.push({text: this.text, result: response});
          },
          error: (error) => {
            console.error('Error calling the analysis API', error);
            this.errorMessage = 'There was a problem analyzing the text online. Please check your connection or try again later.';
          }
        });
    } else {
      const result = this.textAnalysisService.analyzeText(this.text, this.selectedAnalysisType)
      this.resultsArray.push({text: this.text, result: result});
    }
  }

  handleToggle(toggled: boolean) {
    this.isOnline = toggled;
    console.log('Toggle is now: ', toggled);
  }

  closeError(): void {
    this.errorMessage = '';
  }

}
