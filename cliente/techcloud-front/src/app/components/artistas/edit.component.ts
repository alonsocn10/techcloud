import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Artistas } from 'src/app/models/artistas';
import { ArtistasService } from 'src/app/services/artistas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ArtistasService]

})
export class EditComponent implements OnInit {

  constructor(public artistasService: ArtistasService,
    public router: Router) { }

ngOnInit(): void {
}
newArtist(artistForm: NgForm){
this.artistasService.postArtistas(artistForm.value)
.subscribe( res=>{

this.resetForm(artistForm)
this.router.navigate(['/artistas']);

},
err => console.log(err))
}
resetForm(form?: NgForm){
if(form){
form.reset;
this.artistasService.selectedArtista = new Artistas();
}
}
}
