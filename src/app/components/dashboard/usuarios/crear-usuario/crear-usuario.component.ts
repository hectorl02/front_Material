import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  sexo: any[] = ['Masculino', 'Femenino'];
  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private snackB:MatSnackBar,

  ) {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUs() {
    const user: Usuario = {
      us: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo
    }
    this.usuarioService.agregarUs(user);
    this.router.navigate(['/dashboard/usuarios']);
    this.snackB.open('Usuario agregado','',{
      duration:1500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

}
