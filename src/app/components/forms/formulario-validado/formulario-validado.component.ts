import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.css']
})

export class FormularioValidadoComponent implements OnInit {

  miFormularioValidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.miFormularioValidado = this.formBuilder.group({
      nombre:['',Validators.required],// campo obligatorio
      apellido:'',
      //campo obligatorio con valores minimos y maximos
      edad:['',Validators.compose([Validators.required, Validators.min(18),Validators.max(99)])],
      // valida formato email
      email:['',Validators.compose([Validators.required, Validators.email])],
      //valida con una expresion regular que le pasemos
      password:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
      //campo bool con true como obligatorio
      acepta: [false,Validators.requiredTrue]
    })
  }

  get nombre(){
    return this.miFormularioValidado.get('nombre');
  }

  get apellido(){
    return this.miFormularioValidado.get('apellido');
  }
  
  get edad(){
    return this.miFormularioValidado.get('edad');
  }

  get email(){
    return this.miFormularioValidado.get('email');
  }

  get password(){
    return this.miFormularioValidado.get('password');
  }

  get acepta(){
    return this.miFormularioValidado.get('acepta');
  }

  handleSubmit(){
    if (this.miFormularioValidado.valid) {
      console.table(this.miFormularioValidado.value);
      this.miFormularioValidado.reset();
    }
  }
}
