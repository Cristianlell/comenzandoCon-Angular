import { Component, OnInit } from '@angular/core';

export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css']
})
export class ListaBasicaComponent implements OnInit{

  cargando: boolean = true;
  opcion: number = 0;

  listaElementos: Producto[] = [
    {
      nombre:"leche",
      precio: 10,
      descripcion: "leche entera"
    },
    {
      nombre:"carne",
      precio: 15,
      descripcion: "carne de cerdo"
    }
  ];

  constructor(){}
  ngOnInit(): void {

  }

  cambiarCargando(){
    this.cargando = !this.cargando;
  }

  cambiarOpcion(opcionNueva: number){
    this.opcion = opcionNueva;
  }
}
