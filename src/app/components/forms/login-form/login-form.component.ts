import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    // nos suscribimos
    this.authService.login('eve.holt@reqres.in',"cityslicka").subscribe(
      (res) => {
        console.log("Respuesta Login: ",res);
        sessionStorage.setItem('token', res.token)
      },
      (error) => console.log("Error Login: ", error),
      () => console.log("Se completo el request a reqres.io")
      
      
    )
  }
}
