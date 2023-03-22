import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holaMundo';
  nombre="Cristian"

  recibirMensajePadre(evento: string){
    alert(evento)
  }
}
