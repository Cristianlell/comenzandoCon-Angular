import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { IJugador } from 'src/app/models/jugador.interface';
@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent implements OnInit{
  
  dob: Date= new Date(1994,7,30);
  cambio: boolean = true;
  numero_PI:number = 3.1415926535;
  precioCarrito:number = 100;
  persona:IContacto = {
    id:0,
    nombre: 'Cristian',
    apellido:'Lell',
    edad:30,
    email:'cristian@gmail.com'
  }
  cantidad:number = 0.3512;
  textoLargo:string = 'asd qweqwe zxczxczxc';

/* Ejemplo pipe calcular puntuacion */
  jugador1 : IJugador = {
    nombre:'Cristian',
    puntos:[10,30,40,0]
  }
  jugador2 : IJugador = {
    nombre:'Pepe',
    puntos:[0,80,10,5]
  }
  constructor() {
  }
  
  ngOnInit(): void {
  }

  get dateFormat(){
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  cambiarFormato(){
    this.cambio = !this.cambio;
  }
}
