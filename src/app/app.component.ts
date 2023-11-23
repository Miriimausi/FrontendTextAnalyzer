import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "./ui-components/toggle-switch/toggle-switch.component";
import {TextAnalysisApiService} from "./services/api/text-analysis.service.api";
import {HttpClientModule} from "@angular/common/http";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ToggleSwitchComponent, HttpClientModule],
  providers: [TextAnalysisApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {

}
