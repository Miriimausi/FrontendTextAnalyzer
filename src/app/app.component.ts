import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "./toggle-switch/toggle-switch.component";
import {TextAnalysisService} from "./services/text-analysis/text-analysis.service";
import {TextAnalysisApiService} from "./services/api/text-analysis.service.api";
import {HttpClientModule} from "@angular/common/http";
import {TextAnalysisResultInterface} from "./services/text-analysis/text-analysis-result.interface";


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
  analysisType: 'vowels' | 'consonants' | 'both' = 'both';
  resultsArray: Array<{ text: string, result: TextAnalysisResultInterface }> = [];
  isOnline: boolean = false;


  constructor(private textAnalysisService: TextAnalysisService, private textAnalysisApiService: TextAnalysisApiService) {
  }

  analyzeText(): void {
    if (this.isOnline) {
      this.textAnalysisApiService.analyzeText(this.text, this.analysisType).subscribe({
        next: (response) => {
          // Assuming the API response already matches TextAnalysisResultInterface
          this.resultsArray.push({text: this.text, result: response});
        },
        error: (error) => {
          console.error('Error calling the analysis API', error);
        }
      });
    } else {
      const result = this.textAnalysisService.analyzeText(this.text, this.analysisType);
      this.resultsArray.push({text: this.text, result: result});
    }
  }


  handleToggle(toggled: boolean) {
    this.isOnline = toggled;
    console.log('Toggle is now: ', toggled);
  }


}
