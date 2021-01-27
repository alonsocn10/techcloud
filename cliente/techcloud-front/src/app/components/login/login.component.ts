import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  constructor(public loginService : LoginService ){ }

  ngOnInit(): void {
  }
  logIn(form: NgForm){
    this.loginService.login(form.value)
      .subscribe( res=>{
        console.log(res);
      })
      console.log("hola")
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset;
      this.loginService.selectedLogin = new Login();
    }
  }
}

