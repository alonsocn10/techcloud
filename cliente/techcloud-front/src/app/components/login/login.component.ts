import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  constructor(public loginService : LoginService, public router: Router ){ }

  ngOnInit(): void {
    
  }
  logIn(loginForm: NgForm){
    this.loginService.login(loginForm.value)
      .subscribe( res=>{
        console.log(res);
        localStorage.setItem('token', res.token)
        this.resetForm(loginForm)
        this.router.navigate(['/home']);

      },
      err => console.log(err))
    }
  resetForm(form?: NgForm){
    if(form){
      form.reset;
      this.loginService.selectedLogin = new Login();
    }
  }
 
}


