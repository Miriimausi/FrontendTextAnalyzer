import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextAnalysisResultInterface} from "../services/text-analysis/text-analysis-result.interface";
import {AnalysisType} from "../enums/analysis-type.enum";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "../ui-components/toggle-switch/toggle-switch.component";
import {HttpClientModule} from "@angular/common/http";
import {TextAnalysisApiService} from "../services/api/text-analysis.service.api";
import {TypoAnalysisService} from "../services/typo-analysis/typo-analysis.service";

@Component({
  selector: 'app-typo-analyzer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ToggleSwitchComponent, HttpClientModule],
  templateUrl: './typo-analyzer.component.html',
  styleUrl: './typo-analyzer.component.css',
  providers: [TypoAnalysisService],
})
export class TypoAnalyzerComponent {
  text: string = '';
  isOnline: boolean = false;
  errorMessage: string = '';

  constructor(private typoAnalysisService: TypoAnalysisService, private typoAnalysisApiService: TextAnalysisApiService) {
  }

  analyzeText(): void {

    if (this.isOnline) {

      this.typoAnalysisService.analyzeTextOfTypos(this.text)


    } else {

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
