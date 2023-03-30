import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit{
  // creamos una lista para los contactos
  listaContactos: IContacto[]= [];
  contacto: IContacto | undefined;
  constructor(private contactoService: ContactoService){} // inicializamos el servicio en el contructor para que este disponible
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //obtener la lista de contactos
    this.listaContactos =  this.contactoService.obtenerContactos();
  }

  obtenerContacto(id:number){
    // console.log(id);
    this.contacto = this.contactoService.obtenerContactoID(id);
    
  }
}
