import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa1',
  templateUrl: './mapa1.component.html',
  styleUrls: ['./mapa1.component.css']
})
export class Mapa1Component implements OnInit {
  mapa1: Mapboxgl.map;

  constructor() { }

  ngOnInit() {
    Mapboxgl.accessToken = environment.mapboxKey;
this.mapa1 = new Mapboxgl.Map({
container: 'mapa1', // container id
style: 'mapbox://styles/mapbox/streets-v11',
center: [-0.4077825,39.455168], // starting position
zoom: 13 // starting zoom
});
this.mapa1.addControl(new Mapboxgl.NavigationControl())

  }

}
