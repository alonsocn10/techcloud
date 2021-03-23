import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Generos } from 'src/app/models/generos';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-generosnew',
  templateUrl: './generosnew.component.html',
  styleUrls: ['./generosnew.component.css']
})
export class GenerosnewComponent implements OnInit {

  constructor(public generosService: GenerosService,
    public router: Router) { }

ngOnInit(): void {
}
newGenero(artistForm: NgForm){
this.generosService.postGeneros(artistForm.value)
.subscribe( res=>{

this.resetForm(artistForm)
this.router.navigate(['/generos/plist']);

},
err => console.log(err))
}
resetForm(form?: NgForm){
if(form){
form.reset;
this.generosService.selectedGenero = new Generos();
}
}

}
