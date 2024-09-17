import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lattosio',
  templateUrl: './lattosio.component.html',
  styleUrl: './lattosio.component.css'
})
export class LattosioComponent {
  @Input() list: string[] = ['fragola', 'cioccolato', 'limone'];
}
