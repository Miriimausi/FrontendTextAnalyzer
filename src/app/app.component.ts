import {Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "./toggle-switch/toggle-switch.component";
import {TextAnalysisService} from "./text-analysis.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ToggleSwitchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  text: string = '';
  result: Map<string,number> |null = null;
  analysisType: 'vowels' | 'consonants' | 'both' = 'both';
  resultsArray: Map<string,number>[] = [];

  constructor(private textAnalysisService :TextAnalysisService){}


  analyzeText(): void {
    this.result = this.textAnalysisService.analyzeText(this.text, this.analysisType);
    this.resultsArray.push(this.result);
  }
  handleToggle(toggled: boolean) {
    console.log('Toggle is now: ', toggled);
  }


}
