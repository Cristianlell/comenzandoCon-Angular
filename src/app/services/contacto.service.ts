import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';
// Importamos Observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]>{ // devuelve una promesa de tipo IContacto
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoID(id: number):  Observable<IContacto> | undefined{
    let contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto); // Emite un valor a todo componente suscrito
      observer.complete(); // No emitimos mas valores
    })
    if (contacto) {
      return observable;
    }
    return;

  }

}
