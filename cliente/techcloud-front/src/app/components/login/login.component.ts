import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Login } from 'src/app/models/login';
import { Singup } from 'src/app/models/singup';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit  {

  constructor(public loginService : LoginService, public router: Router ){ }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMsg = '';

  submitted = false;
  ngOnInit(): void {
    this.reg()
  }
  logIn(loginForm: NgForm){
    this.submitted = true;
    this.loginService.login(loginForm.value)
      .subscribe( res=>{
        console.log(res);
        localStorage.setItem('token', res.token)
        this.resetForm(loginForm)
        this.router.navigate(['/home']);

      },
      err => console.log(err))
    }
    singUp(singUpForm: NgForm){
      this.loginService.singUp(singUpForm.value)
        .subscribe( res=>{
          console.log(res);
          this.resetForm(singUpForm)
          this.router.navigate(['/home']);
          this.loginService.login(singUpForm.value.nombreUsuario + singUpForm.value.contrasenya)

        },

        err => console.log(err))
      }
      
  resetForm(form?: NgForm){
    if(form){
      form.reset;
      this.loginService.selectedLogin = new Login();
      this.loginService.selectedSingUp = new Singup();

    }
  }
    reg(){  document.querySelector('.img__btn')?.addEventListener('click', function () {
    document.querySelector('.cont')?.classList.toggle('s--signup'); 
  });
}
}
  




