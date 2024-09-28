import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {

  constructor() {}

  //list: string[] = ['fragola', 'cioccolato', 'limone'];
@Output() cardClick = new EventEmitter<void>();
@Output() cardClickClose = new EventEmitter<void>();
 
  isActive: boolean = false;

open(): void {
  
  this.cardClick.emit();
  
  }

  close(): void {

    this.cardClickClose.emit();
    
  }

}
