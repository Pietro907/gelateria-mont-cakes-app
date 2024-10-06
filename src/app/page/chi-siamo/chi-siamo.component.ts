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

  observer: IntersectionObserver = new IntersectionObserver(this.callback, {threshold: 0.6});
  
  ngAfterViewInit(){
    const elHeader = document.getElementById('header_app') as HTMLElement;
    elHeader.style.display="none";
    const elFooter = document.getElementById('footer_app') as HTMLElement;
    elFooter.style.display="none";

    const elHeaderChi = document.getElementById('header_chi_siamo') as HTMLElement;

    elHeaderChi.style.position='sticky';
    elHeaderChi.style.top='-151px';
    elHeaderChi.style.zIndex='2';

    const elSection = document.querySelectorAll(".section");
  
    elSection.forEach((element: Element) =>{
    this.observer.observe(element)
    this.observer.observe(elHeader)

    });

    const elPreTopMenu = document.getElementById('pre_top_header');
    const elPreTopMenu2 = document.getElementById('pre_top_header2');
    
    console.log(elPreTopMenu2);

    elPreTopMenu!.style.background='#CCAA00';
    elPreTopMenu2!.style.background='#CCAA00';

  
  }
}

