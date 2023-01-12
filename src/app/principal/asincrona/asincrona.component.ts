import { Component } from '@angular/core';

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css'],
})
export class AsincronaComponent {
  data: Array<any> = [
    {
      apellido: 'Arcila',
      Casado: false,
      Direccion: 'Calle 35 43',
      Nombre: 'Juan',
      Telefono: '1234567',
    },
    {
      apellido: 'Bueno',
      Casado: false,
      Direccion: 'Calle 34353',
      Nombre: 'Kevin',
      Telefono: '43546',
    },
    {
      apellido: 'Palomino',
      Casado: false,
      Direccion: 'Calle w323',
      Nombre: 'Natalia',
      Telefono: '4353423',
    },
  ];
}
