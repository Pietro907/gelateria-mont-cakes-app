import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-i-nostri-gelati',
  templateUrl: './i-nostri-gelati.component.html',
  styleUrl: './i-nostri-gelati.component.css'
})
export class INostriGelatiComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const elPreTopMenu = document.getElementById('pre_top_header');
    const elPreTopMenu2 = document.getElementById('pre_top_header2');

    console.log(elPreTopMenu2);

    elPreTopMenu!.style.background = 'green';
    elPreTopMenu2!.style.background = 'green';
  }
}
