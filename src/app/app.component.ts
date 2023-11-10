import {Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  text: string = '';
  result: string | null = null;


  analyzeText(): void {
    this.result = 'Ergebnis der Analyse: ' + this.text;
  }
}
