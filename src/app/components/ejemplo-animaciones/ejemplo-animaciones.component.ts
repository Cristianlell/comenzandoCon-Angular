import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-animaciones',
  templateUrl: './ejemplo-animaciones.component.html',
  styleUrls: ['./ejemplo-animaciones.component.css'],
  // Metadatos para animación del componente
  animations:[
    trigger('animaciones',[
      state('active',style({
        transform:'translate(50px,30px)'
      })),
      state('inactive',style({
        transform:'translate(10px,20px)'
      })),
      state('sube',style({
        backgroundColor:"blue" ,
        transform:'translateY(-20%)'
      })),
      state('baja',style({
        transform:'translateY(20%)'
      })),
      transition('inactive=>active', animate('1000ms ease-in')),
      transition('active=>inactive', animate('1000ms ease-out')),

      transition('active=>sube', animate('1000ms ease-in')),
      transition('sube=>active', animate('1000ms ease-out')),

      transition('active=>baja', animate('1000ms ease-in')),
      transition('baja=>active', animate('1000ms ease-out')),

      
      transition('inactive=>baja', animate('1000ms ease-in')),
      transition('baja=>inactive', animate('1000ms ease-out')),
      
      transition('sube=>inactive', animate('1000ms ease-in')),
      transition('inactive=>sube', animate('1000ms ease-out')),
      
      transition('sube=>baja', animate('1000ms ease-in')),
      transition('baja=>sube', animate('1000ms ease-out'))
    ])
  ]
})
export class EjemploAnimacionesComponent implements OnInit {
  state: string = 'sube';

  constructor(){}

  ngOnInit(): void {
  }

  subir(){
    this.state = 'sube'
  }

  bajar(){
    this.state = 'baja'
  }

  cambiarActivoInactivo(){
    if (this.state == 'inactive') {
      this.state = 'active'
    } else {
      this.state = 'inactive'
    }    
  }
}
