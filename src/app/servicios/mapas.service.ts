import { Injectable } from '@angular/core';

@Injectable()
export class MapasService {

        private mapas:Mapa[] = [
            {
              idmapa: "0",
              nombre: "Mapa1",
              descripcion: "Descripción mapa1",
              img: "assets/img/mapa1.png",
              complejidad: 19411101,
              tipo:"DC"
            },
            {
              idmapa: "1",
              nombre: "Mapa2",
              descripcion: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/mapa2.gif",
              complejidad: 19390501,
              tipo:"DC"
            },
            {
              idmapa: "2",
              nombre: "Mapa3",
              descripcion: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/mapa3.png",
              complejidad: 19640101,
              tipo: "Marvel"
            },
            {
              idmapa: "3",
              nombre: "Mapa4",
              descripcion: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/mapa4.gif",
              complejidad: 19620501,
              tipo:"Marvel"
            },
            {
              idmapa: "4",
              nombre: "Mapa5",
              descripcion: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/mapa5.jpg",
              complejidad: 19400601,
              tipo: "DC"
            },
            {
              idmapa: "5",
              nombre: "Mapa6",
              descripcion: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de SpiderMan le permite levantar 10 toneladas o más. Gracias a esta gran fuerza SpiderMan puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a SpiderMan al origen del peligro.",
              img: "assets/img/mapa6.png",
              complejidad: 19620801,
              tipo: "Marvel"
            },
            {
              idmapa: "6",
              nombre: "Mapa7",
              descripcion: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/mapa7.png",
              complejidad: 19741101,
              tipo: "Marvel"
            }
          ];


    constructor() {

        console.log("Servicio listo para usarse");
    }

    getMapas():Mapa[] {
        return this.mapas;
    }

    getMapa( idx: string ) {
      return this.mapas[idx];
    }

    buscarMapas ( termino:string ) {

      let mapasArr:Mapa[] = [];
      termino = termino.toLowerCase();

      for (let mapa of this.mapas) {

        let nombre = mapa.nombre.toLowerCase();
        if( nombre.indexOf(termino) >=0) {
          mapasArr.push(mapa)
        }
      }
      return mapasArr;
    }
}

export interface Mapa{
    idmapa:string;
    nombre: string;
    descripcion: string;
    img: string;
    complejidad: number;
    tipo: string;
}