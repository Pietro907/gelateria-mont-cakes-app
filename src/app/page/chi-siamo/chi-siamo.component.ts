import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.css'
})
export class ChiSiamoComponent implements AfterViewInit {

  
  callback: IntersectionObserverCallback = (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('in_page');
      } else {
        item.target.classList.remove('in_page');
      }
    });
  };

  observer: IntersectionObserver = new IntersectionObserver(this.callback, {threshold: 0.9});
  
  ngAfterViewInit(){
    
    const elSection = document.querySelectorAll(".section");
  
    elSection.forEach((element: Element) =>{
    this.observer.observe(element)
    
    });
  }
}

