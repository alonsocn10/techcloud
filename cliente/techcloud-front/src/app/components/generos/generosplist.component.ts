import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Generos } from 'src/app/models/generos';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-generosplist',
  templateUrl: './generosplist.component.html',
  styleUrls: ['./generosplist.component.css']
})
export class GenerosplistComponent implements OnInit {

  constructor(public generosService: GenerosService) { }

  ngOnInit(): void {
    this.getGeneros();
  }
  getGeneros(){
    this.generosService.getGenero()
      .subscribe(res =>{
        this.generosService.generos = res as Generos[];
      }
        )
  }
  getGenerosId(_id: string){
    this.generosService.getGenerosId(_id)
      .subscribe(res =>{
        this.generosService.generos = res as Generos[];
      }
        )
  }
  resetForm(form?: NgForm){
    if(form){
    form.reset;
    this.generosService.selectedGenero = new Generos();
    }
}
  editGenero(generoForm: NgForm, _id: string){
    this.generosService.putGeneros(generoForm.value, _id)
    .subscribe( res => {
                  this.getGeneros()
                  this.resetForm(generoForm)
    }, err =>{
      console.log(err)
    }
    )
  }
  deleteGenero(_id: string){
    
      this.generosService.deleteGeneros(_id)
    .subscribe(res =>{
      this.getGeneros()
    })
      
    
}
}
