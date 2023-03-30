import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): IContacto[]{
    return CONTACTOS;
  }

  obtenerContactoID(id: number): IContacto | undefined{
    let contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);
    if (contacto) {
      return contacto;
    }
    return;

  }

}
