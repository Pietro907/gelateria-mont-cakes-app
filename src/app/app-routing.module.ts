import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page/page404/page404.component';
import { HomeComponent } from './page/home/home.component';
import { ChiSiamoComponent } from './page/chi-siamo/chi-siamo.component';
import { DoveSiamoComponent } from './page/dove-siamo/dove-siamo.component';
import { INostriGelatiComponent } from './page/i-nostri-gelati/i-nostri-gelati.component';
import { LeTorteComponent } from './page/le-torte/le-torte.component';
import { PasticceriaComponent } from './page/pasticceria/pasticceria.component';
import { ContattiComponent } from './page/contatti/contatti.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/homepage'},
  {path: 'homepage', component:HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'chi_siamo', component: ChiSiamoComponent },
  { path: 'dove_siamo', component: DoveSiamoComponent },
  { path: 'i_nostri_gelati', component: INostriGelatiComponent },
  { path: 'le_torte', component: LeTorteComponent },
  { path: 'pasticceria', component: PasticceriaComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
