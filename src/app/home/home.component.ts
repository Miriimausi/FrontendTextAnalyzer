import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {ToggleSwitchComponent} from "../ui-components/toggle-switch/toggle-switch.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToggleSwitchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
