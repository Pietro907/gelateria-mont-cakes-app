import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
      const elPreTopMenu = document.getElementById('pre_top_header');
      const elPreTopMenu2 = document.getElementById('pre_top_header2');
      
      console.log(elPreTopMenu2);
  
      elPreTopMenu!.style.background='#CCAA00';
      elPreTopMenu2!.style.background='#CCAA00';

        const elHeader = document.getElementById('header_app') as HTMLElement;
        elHeader.style.display="none";
        const elFooter = document.getElementById('footer_app') as HTMLElement;
        elFooter.style.display="none";
    
        const elHeaderHome = document.getElementById('header_home') as HTMLElement;
    
        elHeaderHome.style.position='sticky';
        elHeaderHome.style.top='-151px';
        elHeaderHome.style.zIndex='2';
  }
}
