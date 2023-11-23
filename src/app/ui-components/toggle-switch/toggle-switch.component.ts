import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-toggle-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css'],
})
export class ToggleSwitchComponent {
  @Output() toggleChange = new EventEmitter<boolean>();
  isToggled: boolean = false;

  onToggleChange(event: any): void {
    this.isToggled = !this.isToggled;
    this.isToggled = event.target.checked;
    this.toggleChange.emit(this.isToggled);
  }

}
