import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //definimos nuestro formulario
  miFormulario : FormGroup = new FormGroup({});

  // inyectamos la clase FORMBUILDER para construir nuestro formulario
  constructor(private formBuilder: FormBuilder){  }

  ngOnInit(): void {
    // iniciamos los campos del formulario con sus valores por de defecto
    this.miFormulario = this.formBuilder.group({
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
      direccion:''
    });
    
    // nos suscribimos a los cambios que ocurran en el formulario y los mostramos por consola
    this.miFormulario.valueChanges.subscribe(
      console.log
    )
    /* es lo mismo que hacer:
     this.miFormulario.valueChanges.subscribe(
      (valor) => console.log(valor)
    ) */
  }
}
