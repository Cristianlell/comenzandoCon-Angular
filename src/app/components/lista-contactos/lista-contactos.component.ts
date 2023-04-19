import { Component, OnInit, OnDestroy } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit, OnDestroy{
  // creamos una lista para los contactos
  listaContactos: IContacto[]= [];
  contacto: IContacto | undefined;
  // subscripcion de servicios
  subscription: Subscription | undefined;

  constructor(private contactoService: ContactoService){} // inicializamos el servicio en el contructor para que este disponible

  ngOnInit(): void {
    //obtener la lista de contactos
    this.contactoService.obtenerContactos()
    .then((contactos: IContacto[]) => this.listaContactos =  contactos)
    .catch(error => console.log(error))
    
  }

  obtenerContacto(id:number){
    // console.log(id);
   this.subscription =  this.contactoService.obtenerContactoID(id)?.subscribe((contact: IContacto) => this.contacto = contact)
    console.log(this.contacto);
    
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
