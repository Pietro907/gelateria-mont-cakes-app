import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrl: './button-edit.component.css',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})
export class ButtonEditComponent {

}
