import {Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "./toggle-switch/toggle-switch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ToggleSwitchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  text: string = '';
  result: string | null = null;
  analysisType: string = 'both'; // Default selection


  analyzeText(): void {
    this.result = 'Ergebnis der Analyse: ' + this.text;
  }

  // Inside app.component.ts
  handleToggle(toggled: boolean) {
    // toggled will be a boolean
    console.log('Toggle is now: ', toggled);
  }


}
