import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "./toggle-switch/toggle-switch.component";
import {TextAnalysisService} from "./services/text-analysis/text-analysis.service";
import {TextAnalysisApiService} from "./services/api/text-analysis.service.api";
import {HttpClientModule} from "@angular/common/http";
import {TextAnalysisResultInterface} from "./services/text-analysis/text-analysis-result.interface";
import {AnalysisType} from "./enums/analysis-type.enum";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ToggleSwitchComponent, HttpClientModule],
  providers: [TextAnalysisApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  text: string = '';
  analysisType: AnalysisType = AnalysisType.Both;
  resultsArray: Array<{ text: string, result: TextAnalysisResultInterface }> = [];
  isOnline: boolean = false;
  errorMessage: string = '';
  selectedAnalysisType: AnalysisType = AnalysisType.Both; // Assuming 'Both' is a valid enum member
  analysisTypeOptions: string[] = Object.keys(AnalysisType).map(k => AnalysisType[k as keyof typeof AnalysisType]);

  constructor(private textAnalysisService: TextAnalysisService, private textAnalysisApiService: TextAnalysisApiService) {
  }

  analyzeText(): void {
    this.errorMessage = "";
    if (this.isOnline) {
      // When online, call the API service
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
      // When offline, call the local service
      this.textAnalysisService.analyzeText(this.text, this.selectedAnalysisType)
        .subscribe({
          next: (result) => {
            this.resultsArray.push({text: this.text, result: result});
          },
          error: (error) => {
            console.error('Error during offline text analysis', error);
            this.errorMessage = 'There was a problem analyzing the text offline. Please check the input or try again later.';
          }
        });
    }
  }


  get analysisTypeKeys(): string[] {
    return Object.keys(this.analysisType);
  }

  handleToggle(toggled: boolean) {
    this.isOnline = toggled;
    console.log('Toggle is now: ', toggled);
  }

  closeError(): void {
    this.errorMessage = '';
  }

}
