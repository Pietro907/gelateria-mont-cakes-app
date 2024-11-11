import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-lattosio',
  templateUrl: './lattosio.component.html',
  styleUrl: './lattosio.component.css',
})
export class LattosioComponent implements AfterViewInit {
  @Input() list: string[] = ['fragola', 'cioccolato', 'limone'];

  isActive: boolean = false;

  /* apertura e chiusura al click delle cards */
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

      //console.log(this.isActive + ' è attivo');
    } else {
      this.isActive = false;
      elBigImg[index].classList.add('img_close');
      elBigImg[index].classList.remove('img_open');

      setTimeout(() => {
        elBigImg[index].style.transform = 'rotateX(0deg)';
      }, 500);

      //console.log(elBigImg[index]);

      //console.log(this.isActive + ' è false');
    }
  }
  ngAfterViewInit(): void {
    /* cambio colore del header per page */
    const elPreTopMenu = document.getElementById('pre_top_header');
    const elPreTopMenu2 = document.getElementById('pre_top_header2');

    //console.log(elPreTopMenu2);

    elPreTopMenu!.style.background = '#00c5ff';
    elPreTopMenu2!.style.background = '#00c5ff';

    /*  const elCioc = document.getElementById('cioccolate');
    if (elCioc && elCioc.children[0].children[0]) {
      const imgCioc = elCioc.children[0].children[0] as HTMLImageElement;
      if (imgCioc.tagName == 'IMG') {
        imgCioc.src =
          '../../../../assets/img/gusti/lattosio/cioccolato/cioccolato.jpg';
      }
      const elCream = document.getElementById('cream');
      if (elCream && elCream.children[0].children[0]) {
        const imgCream = elCream.children[0].children[0] as HTMLImageElement;
        if (imgCream.tagName == 'IMG') {
          imgCream.src =
            '../../../../assets/img/gusti/lattosio/crema/crema.png';
        }
      }
    }
    const elFior_di_panna = document.getElementById('fior_di_panna');
    if (elFior_di_panna && elFior_di_panna.children[0].children[0]) {
      const imgFior_di_panna = elFior_di_panna.children[0]
        .children[0] as HTMLImageElement;
      if (imgFior_di_panna.tagName == 'IMG') {
        imgFior_di_panna.src =
          '../../../../assets/img/gusti/lattosio/fior-di-panna/fior-di-panna.jpg';
      }
    }
    const elFragola = document.getElementById('fragola');
    if (elFragola && elFragola.children[0].children[0]) {
      const imgFragola = elFragola.children[0].children[0] as HTMLImageElement;
      if (imgFragola.tagName == 'IMG') {
        imgFragola.src =
          '../../../../assets/img/gusti/lattosio/fragola/fragola.jpg';
      }
    } */

    /* assegnazioni immagini delle cards */
    const elCardLatt = document.getElementsByClassName(
      'card_latt'
    ) as HTMLCollectionOf<HTMLElement>;
    //console.log(elCardLatt);
    const arrayImg = [
      '../../../../assets/img/gusti/lattosio/cioccolato/cioccolato.jpg',
      '../../../../assets/img/gusti/lattosio/crema/crema.png',
      '../../../../assets/img/gusti/lattosio/fior-di-panna/fior-di-panna.jpg',
      '../../../../assets/img/gusti/lattosio/fragola/fragola.jpg',
      '../../../../assets/img/gusti/lattosio/variegato-nutella/variegato-nutella.jpg',
      '../../../../assets/img/gusti/lattosio/cioccolata-fondente/cioccolata-fondente.png',
      '../../../../assets/img/gusti/lattosio/cremino/cremino.png',
      '../../../../assets/img/gusti/lattosio/cup-cakes/cup-cake.png',
      '../../../../assets/img/gusti/lattosio/limone/limone.png',
      '../../../../assets/img/gusti/lattosio/nocciola/nocciola.png',
      '../../../../assets/img/gusti/lattosio/pan-di-stelle/pan-di-stelle.png',
      '../../../../assets/img/gusti/lattosio/pistacchiosa/pistacchiosa.png',
      '../../../../assets/img/gusti/lattosio/stracciatella/stracciatella.png',
      '../../../../assets/img/gusti/lattosio/variegato-amarena/variegato-amarena.png',
    ];
    //console.log(arrayImg);

    for (let i = 0; i < elCardLatt.length; i++) {
      const element = elCardLatt[i];
      if (i < arrayImg.length) {
        const imgAll = element.children[0].children[0] as HTMLImageElement;
        if (imgAll.tagName == 'IMG') {
          imgAll.src = arrayImg[i];
          //console.log((imgAll.src = arrayImg[i]));
        }
      }
    }

    /* 
    const imgCard = element.children[0].children[0] as HTMLImageElement;
    if (imgCard.tagName == 'IMG') {
      imgCard.src = '../../../../assets/img/gusti/lattosio/variegato-nutella/variegato-nutella.jpg'
      }
      console.log(element.children[0].children[0]); */
      
      /* assegnazione informazioni delle cards */
      
      const arrayInfoCards = [
        { title: 'cioccolato al latte', ingredients: ['cioccolato', ' latte', ' saccarosio'] },
        { title: 'crema', ingredients: ['uova', ' latte', ' saccarosio'] },
        { title: 'fior di panna', ingredients: ['panna', ' latte', ' saccarosio'] },
        { title: 'fragola', ingredients: ['fragola', ' acqua', ' saccarosio'] },
        { title: 'variegato nutella', ingredients: ['nutella', ' latte', ' saccarosio'] },
        { title: 'cioccolato fondente', ingredients: ['cioccolato', ' acqua', ' saccarosio'] },
        { title: 'cremino', ingredients: ['nutella', ' nutella bianca', ' saccarosio'] },
        { title: 'cup-cake', ingredients: ['arachide', 'burro di arachidi', 'caramello salato', ' acqua', ' saccarosio'] },
        { title: 'limone', ingredients: ['limone', ' acqua', ' saccarosio'] },
        { title: 'nocciola', ingredients: ['nocciola', ' latte', ' saccarosio'] },
        { title: 'pan di stelle', ingredients: ['pan di stelle', ' latte', ' saccarosio'] },
        { title: 'pistacchiosa', ingredients: ['pistacchio', ' latte', ' saccarosio'] },
        { title: 'stracciatella', ingredients: ['cioccolato', ' latte', ' saccarosio'] },
        { title: 'variegato amarena', ingredients: ['amarena', ' latte', ' saccarosio'] },
        { title: 'fragola', ingredients: ['fragola', ' acqua', ' saccarosio'] },
        { title: 'fragola', ingredients: ['fragola', ' acqua', ' saccarosio'] },
        { title: 'fragola', ingredients: ['fragola', ' acqua', ' saccarosio'] },
      ];
    //console.log(arrayInfoCards[1]);

    const arrayInfoCardSmall = [
     '../../../../assets/img/gusti/lattosio/cioccolato/cioccolato-small.png',
     '../../../../assets/img/gusti/lattosio/crema/crema-small.png',
     '../../../../assets/img/gusti/lattosio/fior-di-panna/fior-di-panna-small.png',
     '../../../../assets/img/gusti/lattosio/fragola/fragola-small.png',
     '../../../../assets/img/gusti/lattosio/variegato-nutella/varigato-nutella-small.png',
     '../../../../assets/img/gusti/lattosio/cioccolata-fondente/cioccolato-fondente-small.png',
     '../../../../assets/img/gusti/lattosio/cremino/cremino-small.png',
     '../../../../assets/img/gusti/lattosio/cup-cakes/cup-cakes-small.png',
     '../../../../assets/img/gusti/lattosio/limone/limone-small.png',
     '../../../../assets/img/gusti/lattosio/nocciola/nocciola-small.png',
     '../../../../assets/img/gusti/lattosio/pan-di-stelle/pan-di-stelle-small.png',
     '../../../../assets/img/gusti/lattosio/pistacchiosa/pistacchio-small.png',
     '../../../../assets/img/gusti/lattosio/stracciatella/stracciatella-small.png',
     '../../../../assets/img/gusti/lattosio/variegato-amarena/variegato-amarena-small.png',
    ];

    for (let i = 0; i < elCardLatt.length; i++) {
      const element = elCardLatt[i];
      console.log(element.children[0].children[1]);
      if (i < elCardLatt.length) {
        const infoCard = arrayInfoCards[i];
        const infoCardSmall = arrayInfoCardSmall[i];
        const allInfoTitle = element.children[0].children[2].children[0];
        const allInfoDescr = element.children[0].children[3];
        const allInfoList =  element.children[0].children[2].children[2];
        const allImageSmall = element.children[0].children[1];
        console.log(element.children[0].children[2]);
        
        allInfoTitle.innerHTML = infoCard.title.charAt(0).toUpperCase() + infoCard.title.slice(1).toLowerCase();
        allInfoList.innerHTML = '';

        infoCard.ingredients.forEach((ingredients) => {
          allInfoList.classList.add('d_flex_info');
          const elLi = document.createElement('li');
          allInfoList.appendChild(elLi); 
          elLi.innerText = ingredients;
          elLi.style.paddingRight='1rem';
        });

      }
    }

    for (let i = 0; i < elCardLatt.length; i++) {
      const element = elCardLatt[i];
      if (i < arrayInfoCardSmall.length) {
        const AllImgSmall = element.children[0].children[1] as HTMLImageElement;
        if (AllImgSmall.tagName == 'IMG') {
          AllImgSmall.src = arrayInfoCardSmall[i];
          //console.log((imgAll.src = arrayImg[i]));
        }
      }
    }

  }
}
