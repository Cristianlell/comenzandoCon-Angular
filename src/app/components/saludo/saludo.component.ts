import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() nombre: string = 'Anónimo';
  @Output() mensajeEmitHijo: EventEmitter<string> = new EventEmitter;
  myStyle: object = {
    color: "red",
    fontSize:"20px",
    fontWheight: "bold"
  }
  constructor() {}
  
  ngOnInit(): void {
    console.log('OnInit del componente saludo');
  }
  ngOnChanges(changes: SimpleChanges): void {
   //console.log(changes);
   console.log("valor anterior: ", changes['nombre'].previousValue);
   console.log("valor nuevo: ", changes['nombre'].currentValue)
   
  }
  ngOnDestroy(): void {
    
  }
  enviarMensajeAlPadre(): void {
    this.mensajeEmitHijo.emit(`Hola ${this.nombre}. Evento click lanzado desde el hijo`);
  }
}
