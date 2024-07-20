/* app *.module.ts */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



/* Angular Material */
import { TableComponent } from './componenti/table/table.component';
import { ButtonCreateProjectComponent } from './buttons/button-create-project/button-create-project.component';
import { ButtonViewComponent } from './buttons/button-view/button-view.component';
import { ButtonEditComponent } from './buttons/button-edit/button-edit.component';
import { ButtonDeleteComponent } from './buttons/button-delete/button-delete.component';
import { ButtonDashboardComponent } from './buttons/button-dashboard/button-dashboard.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Componenti */
import { AppComponent } from './app.component';
import { PageViewComponent } from './componenti/page-view/page-view.component';
import { MyProjectsComponent } from './componenti/my-projects/my-projects.component';
import { Page404Component } from './page/page404/page404.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './componenti/macro/header/header.component';
import { HeaderLogginComponent } from './componenti/macro/header-loggin/header-loggin.component';
import { ChiSiamoComponent } from './page/chi-siamo/chi-siamo.component';
import { DoveSiamoComponent } from './page/dove-siamo/dove-siamo.component';
import { INostriGelatiComponent } from './page/i-nostri-gelati/i-nostri-gelati.component';
import { LeTorteComponent } from './page/le-torte/le-torte.component';
import { PasticceriaComponent } from './page/pasticceria/pasticceria.component';
import { ContattiComponent } from './page/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    PageViewComponent,
    MyProjectsComponent,
    Page404Component,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    HeaderLogginComponent,
    ChiSiamoComponent,
    DoveSiamoComponent,
    INostriGelatiComponent,
    LeTorteComponent,
    PasticceriaComponent,
    ContattiComponent,

  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    TableComponent,
    ButtonDashboardComponent,
    ButtonCreateProjectComponent,
    ButtonViewComponent,
    ButtonEditComponent,
    ButtonDeleteComponent,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
