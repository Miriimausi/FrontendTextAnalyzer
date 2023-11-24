import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ToggleSwitchComponent} from "./ui-components/toggle-switch/toggle-switch.component";
import {TextAnalysisApiService} from "./services/api/text-analysis.service.api";
import {HttpClientModule} from "@angular/common/http";

//added imports for the routing, toggle-switch, and http connection
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
