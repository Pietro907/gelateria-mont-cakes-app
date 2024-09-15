/* app *.module.ts */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



/* Angular Material */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Componenti */
import { AppComponent } from './app.component';
import { Page404Component } from './page/page404/page404.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './componenti/macro/header/header.component';
import { HeaderLogginComponent } from './componenti/macro/header-loggin/header-loggin.component';
import { ChiSiamoComponent } from './page/chi-siamo/chi-siamo.component';
import { DoveSiamoComponent } from './page/dove-siamo/dove-siamo.component';
import { INostriGelatiComponent } from './page/i-nostri-gelati/i-nostri-gelati.component';
import { LeTorteComponent } from './page/le-torte/le-torte.component';
import { PasticceriaComponent } from './page/pasticceria/pasticceria.component';
import { ContattiComponent } from './page/contatti/contatti.component';
import { LattosioComponent } from './page/i-nostri-gelati/lattosio/lattosio.component';
import { SenzaLattosioComponent } from './page/i-nostri-gelati/senza-lattosio/senza-lattosio.component';
import { CardComponent } from './componenti/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HomeComponent,
    HeaderComponent,
    HeaderLogginComponent,
    ChiSiamoComponent,
    DoveSiamoComponent,
    INostriGelatiComponent,
    LeTorteComponent,
    PasticceriaComponent,
    ContattiComponent,
    LattosioComponent,
    SenzaLattosioComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
