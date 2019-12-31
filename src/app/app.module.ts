//import { MapasService } from './components/servicios/mapas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MapasComponent } from './components/mapas/mapas.component';

//Servicios
import {MapasService} from './servicios/mapas.service';
import { MapaComponent } from './components/mapa/mapa.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { Mapa1Component } from './components/shared/mapa1/mapa1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MapasComponent,
    MapaComponent,
    BuscadorComponent,
    Mapa1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
