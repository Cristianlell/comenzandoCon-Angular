import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.css']
})
export class FormularioArrayComponent implements OnInit{
  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.miFormularioArray = this.formBuilder.group({
      nombre:'',
      apellido:'',
      telefonos: this.formBuilder.array([]) 
    })
  }

  // Método para obtener el FormArray de la lista de teléfonos
  get telefonosFormulario() : FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray // me devolvera el array de telefonos 
  }

  // Método para añadir telefonos a la lista

  anadirTelefono(){
    // creamos un grupo de telefono
    const telefonoNuevo= this.formBuilder.group({
      prefijo:'',
      numero:''
    });

    //añadimos el grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);
  }

  // Método para eliminar telefonos de la lista
  eliminarTelefono(index:number){
    this.telefonosFormulario.removeAt(index);
  }
}
