import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-lattosio',
  templateUrl: './lattosio.component.html',
  styleUrl: './lattosio.component.css',
})
export class LattosioComponent implements AfterViewInit {

  @Input() list: string[] = ['fragola', 'cioccolato', 'limone'];

  isActive: boolean = false;

  
  
  open(index: number): void {
    const elBigImg = document.getElementsByClassName(
      'img_big'
    ) as HTMLCollectionOf<HTMLElement>;
    console.log(elBigImg[index]);
    
    if (!elBigImg[index].classList.contains('img_open')) {
      
      this.isActive = true;
      elBigImg[index].classList.add('img_open');
      elBigImg[index].classList.remove('img_close');

      setTimeout(() => {
        elBigImg[index].style.transform = 'rotateX(102deg)';
      }, 500);

      console.log(this.isActive + ' è attivo');
      
    } else {
      this.isActive = false;
      elBigImg[index].classList.add('img_close');
      elBigImg[index].classList.remove('img_open');

      setTimeout(() => {
        elBigImg[index].style.transform = 'rotateX(0deg)';
      }, 500);

      console.log(elBigImg[index]);

      console.log(this.isActive + ' è false');
      
    }

  }
  ngAfterViewInit(): void {
    const elPreTopMenu = document.getElementById('pre_top_header');
    const elPreTopMenu2 = document.getElementById('pre_top_header2');

    console.log(elPreTopMenu2);

    elPreTopMenu!.style.background = '#00c5ff';
    elPreTopMenu2!.style.background = '#00c5ff';

  }

 }
