import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading= false;

  constructor(
    private fb: FormBuilder,
    private snackB:MatSnackBar
  ) { 
    this.form = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  enter() {
    const user = this.form.value.user; 
    const password = this.form.value.password; 
    if( user === 'hector' && password === 'admin123') {

    } else {
      this.error();
      this.form.reset();
    }

  }

  error(){
    this.snackB.open('Usuario o contraseña invalidos','',{
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.loading= false;
    }, 800);
  }

}
