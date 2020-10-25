import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nuevo-perfil',
  templateUrl: './nuevo-perfil.component.html',
  styleUrls: ['./nuevo-perfil.component.scss']
})
export class NuevoPerfilComponent implements OnInit {
  modeloPerfil = this.formBuild.group({
    nombrePerfil: ['', Validators.required],
    apellidosPerfil: ['', [Validators.required]],
    correoPerfil: ['', [Validators.required, Validators.email]],
    passwordPerfil: ['', Validators.required, Validators.minLength(8)],
    telefonoPerfil: [''],
    adminCheck: [''],
    lecturaCheck: [''],
    escrituraCheck: [''],
    borradoCheck: ['']
  });


    constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
  }

  enviar() {}

}

