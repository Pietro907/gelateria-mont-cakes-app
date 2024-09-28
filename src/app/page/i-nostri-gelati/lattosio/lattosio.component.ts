import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lattosio',
  templateUrl: './lattosio.component.html',
  styleUrl: './lattosio.component.css',
})
export class LattosioComponent {
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

 /*  close(index: number): void {
    const elBigImg = document.getElementsByClassName(
      'img_big'
    ) as HTMLCollectionOf<HTMLElement>;
    console.log(elBigImg[index]);
    
    if (!elBigImg[index].classList.contains('img_close')) {
      
      this.isActive = true;
      elBigImg[index].classList.add('img_close');
      elBigImg[index].classList.remove('img_open');

      setTimeout(() => {
        elBigImg[index].style.transform = 'rotateX(-150deg)';
      }, 4000);

      console.log(this.isActive + ' è attivo');
      
    } else if(!elBigImg[index].classList.contains('img_open')) {
      this.isActive= false;
      elBigImg[index].classList.add('img_open');
      elBigImg[index].classList.remove('img_close');

      console.log(elBigImg[index]);

      console.log(this.isActive + ' è false');
      
    }
  } */

   

}
