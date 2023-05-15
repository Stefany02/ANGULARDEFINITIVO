import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencias = [
    {
      empresa: 'Jenic Seguridad S.R.L',
      cargo: 'Administrativa',
      fecha: '2022',
      tareas: ['Control de legajos de empleados', 'Seguimiento de cheques', 'Liquidación de sueldos'],
      imagen: 'assets/img/logo Jenic.jpg',
      clase: 'Jenic'
    },
    {
      empresa: 'DyD_Distribuidorasanitaria',
      cargo: '',
      fecha: '2020-2022',
      tareas: ['Armado de paquetes Mercado Libre', 'Control de ordenes de compra al exterior', 'Armado de documentación de importación'],
      imagen: 'assets/img/dyd.jpg',
      clase: 'DyD'
    },
    {
      empresa: 'Baco Club de Vinos',
      cargo: '',
      fecha: '2019',
      tareas: ['Dotes de negociación', 'Comunicación asertiva', 'Captación de nuevos clientes'],
      imagen: 'assets/img/BacoClub-logo.jpg',
      clase: 'Baco'
    }
  ];
}
