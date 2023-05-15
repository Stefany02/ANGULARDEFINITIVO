import { Component } from '@angular/core';

interface Formacion {
  titulo: string;
  institucion: string;
  imagenUrl: string;
}

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  formacion: Formacion[] = [
    {
      titulo: 'Licenciatura en Comercio Internacional',
      institucion: 'Universidad Nacional de Quilmes',
      imagenUrl: 'assets/img/quilmes.png'
    },
    {
      titulo: 'Ingles',
      institucion: 'Instituto C.E.P.I',
      imagenUrl: 'assets/img/ingles.jpg'
    }
  ];

}

