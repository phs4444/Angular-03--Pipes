import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Antoñito';
nombre2 = 'paQuita salas de la camacha ambroSSi';

  array = [0, 1, 2, 3, 4, 5, 6];
  PI = 3.141596;
  nPorcentaje = 0.234;
  nCurrency = 2311.54;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      barrio: "Alegría",
      calle: "Melancolía",
      numero: 19
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ya tengo los datos!'), 3500);
  });

  fecha = new Date();

  video = 'BhQzCODFjMA';

  nombre3 = 'Paquita';
}
