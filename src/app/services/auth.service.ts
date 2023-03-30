import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email:string, password:string):Observable<any>{
    let body: object = {
      email,
      password
    }
    //Devolvemos la respuesta del Observable cuando la peticion se complete,
    // el componente suscrito accedera al token de login
    return this.http.post('https://reqres.in/api/login',body);
  }
}
