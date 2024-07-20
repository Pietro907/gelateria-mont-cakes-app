import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button-create-project',
  templateUrl: './button-create-project.component.html',
  styleUrl: './button-create-project.component.css',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})
export class ButtonCreateProjectComponent {

}
