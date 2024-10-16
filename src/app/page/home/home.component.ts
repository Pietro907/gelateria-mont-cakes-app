import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const elPreTopMenu = document.getElementById('pre_top_header');
    const elPreTopMenu2 = document.getElementById('pre_top_header2');

    console.log(elPreTopMenu2);

    elPreTopMenu!.style.background = '#CCAA00';
    elPreTopMenu2!.style.background = '#CCAA00';
    
  }
}
