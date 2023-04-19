import { Component, OnInit } from '@angular/core';
// importamos de Reactive Forms para poder crear un formulario dentro de otro
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.css']
})
export class FormularioAnidadoComponent implements OnInit {
  miFormularioAnidado: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    //agrupacion de telefonos 
    const telefonoFijo = this.formBuilder.group(
      {
        prefijo:'',
        numero:''
      }
    )

    const telefonoMovil = this.formBuilder.group(
      {
        prefijo:'',
        numero:''
      }
    )

    // agrupacion del formulario que tiene dos agrupaciones
    this.miFormularioAnidado = this.formBuilder.group({
      telefonoFijo: telefonoFijo,
      telefonoMovil:telefonoMovil
    })
  }
}
