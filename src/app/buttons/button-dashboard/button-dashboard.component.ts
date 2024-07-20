import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button-dashboard',
  templateUrl: './button-dashboard.component.html',
  styleUrl: './button-dashboard.component.css',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule,],
})
export class ButtonDashboardComponent {

}
