import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers:[UsuariosService]

})
export class NewComponent implements OnInit {

  constructor(public usuarioService : UsuariosService, public router: Router,  ){ }

  ngOnInit(): void {
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMsg = '';

  newUser(artistForm: NgForm){

    this.usuarioService.postUsuarios(artistForm.value)
    .subscribe( res=>{
    
    this.resetForm(artistForm)
    this.router.navigate(['/usuarios']);
    
    },
    err => console.log(err))
    }
    resetForm(form?: NgForm){
    if(form){
    form.reset;
    this.usuarioService.selectedUsuario = new Usuarios();
    }
}
}
