import { NgModule,LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
/* modulos de angular */
import {MatFormFieldModule} from '@angular/material/form-field';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';

/* modulos para locale */
import {registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES); /* registramos el locale_id de 'es' para poder usarlo en los pipe */
@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //importamos el reactive formModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    //importamos nuestro modulo personalizado
    ListsModule,
    // importamos el modulo de HttpClientModule
    HttpClientModule,
    BrowserAnimationsModule,
    /* modulo de angular material */
    MatFormFieldModule
    
  ],
  providers: [
    /* REGISTRAMOS EL LOCALE ES PARA QUE LOS PIPES SALGAN EN ESPAÑOL */
    {
      provide:LOCALE_ID,
      useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
