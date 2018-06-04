import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'carlos';
  nombre2 = 'carlos emilio gonzalez poblete';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  video = 'ktlsQ_Oi-dI';
  activar = true;
  pi = 3.141516;
  salario = 895000;
  heroe = {
    nombre:  'logan',
    edad: 500,
    direccion: {
      ubicacion: 'estados unidos',
      numero: 10234,
      color: 'cafe'
    },
    apodos: [
      {
        pais: 'españa',
        nombre: 'lobesno'
      },
      {
        pais: 'resto del mundo',
        nombre: 'wolverine'
      }
    ],
    poder: 'regeneracion'
  };
  valorDePromesa = new Promise( (resolve) => {
    setTimeout( () => {
      resolve('Llego la promesa');
    }, 3500);
  });
  fecha: Date = new Date();
}
