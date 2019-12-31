import { MapasService } from '../../servicios/mapas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa:any = {};

  constructor( private activatedRoute: ActivatedRoute,
              private _mapasService: MapasService
               ) {

    this.activatedRoute.params.subscribe( params =>{
        //console.log( params['id'] );
        this.mapa = this._mapasService.getMapa( params['id']);
        console.log(this.mapa);
      });
   }

  ngOnInit() {
  }

}
