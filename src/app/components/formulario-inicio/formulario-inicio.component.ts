import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/components/models/persona.model';

@Component({
  selector: 'app-formulario-inicio',
  templateUrl: './formulario-inicio.component.html',
  styleUrls: ['./formulario-inicio.component.css']
})
export class FormularioInicioComponent implements OnInit {

  persona: Persona = new Persona ('', '', '');

  formularioPersona = new FormGroup ({
    nombre: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    mensaje: new FormControl ('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
    setTimeout (() =>{
      this.formularioPersona.get('nombre')?.setValue(this.persona.nombre);
      this.formularioPersona.get('email')?.setValue(this.persona.email);
      this.formularioPersona.get('mensaje')?.setValue(this.persona.mensaje);
  
    },1000);
    } 
    mostrarFormularui () {
      console.log(this.formularioPersona.value);
    }
  }
