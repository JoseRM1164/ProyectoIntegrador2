import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { PerfilesService } from '../../../services/perfiles.service';
import { Perfil } from '../../../../../models/perfil';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {
  miperfil: Perfil;

  modeloPerfil = this.formBuild.group({
    nombrePerfil: ['', Validators.required],
    apellidosPerfil: ['', [Validators.required]],
    correoPerfil: ['', [Validators.required, Validators.email]],
    passwordPerfil: ['', [Validators.required, Validators.minLength(8)]],
    telefonoPerfil: [''],
    adminCheck: [''],
    lecturaCheck: [''],
    escrituraCheck: [''],
    borradoCheck: ['']
  });

  constructor(
    private formBuild: FormBuilder,
    private perfilesService: PerfilesService,
    private router: Router
  ) {
    this.miperfil = {
      id: 0,
      nombre: '',
      apellidos: '',
      correo: '',
      password: '',
      telefono: '',
      admin: '',
      lectura: '',
      escritura: '',
      borrado: ''
    };
  }

  ngOnInit(): void {
    this.getMiPerfil();
  }

  getMiPerfil(): void {
    this.perfilesService
      .getPerfil(1)
      .subscribe(perfil => (this.miperfil = perfil));
  }

  enviar() {
    const nuevoPerfil: Perfil = {
      id: 4,
      nombre: String(this.modeloPerfil.value.nombrePerfil),
      apellidos: String(this.modeloPerfil.value.apellidosPerfil),
      correo: String(this.modeloPerfil.value.correoPerfil),
      password: String(this.modeloPerfil.value.passwordPerfil),
      telefono: String(this.modeloPerfil.value.telefonoPerfil),
      admin: String(this.modeloPerfil.value.adminCheck),
      lectura: String(this.modeloPerfil.value.lecturaCheck),
      escritura: String(this.modeloPerfil.value.escrituraCheck),
      borrado: String(this.modeloPerfil.value.borradoCheck)
    };
    this.perfilesService.updatePerfil(nuevoPerfil);
    this.router.navigateByUrl('/dashboard/perfil');
  }
}
