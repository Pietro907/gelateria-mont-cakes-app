import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterLink, ROUTES } from '@angular/router';


@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css', './chi-siamo-section.component.css', './chi-siamo-utilities.component.css']
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

  observer: IntersectionObserver = new IntersectionObserver(this.callback, {
    threshold: 0.6
  });


  ngAfterViewInit() {
 

    const elSection = document.querySelectorAll('.section');

    elSection.forEach((element: Element) => {
      this.observer.observe(element);
      
    });

    const elPreTopMenu = document.getElementById('pre_top_header');
    const elPreTopMenu2 = document.getElementById('pre_top_header2');

    console.log(elPreTopMenu2);

    elPreTopMenu!.style.background = '#CCAA00';
    elPreTopMenu2!.style.background = '#CCAA00';
  }
}
