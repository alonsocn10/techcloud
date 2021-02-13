import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { EstiloComponent } from './components/estilo/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { EditComponent } from './components/artistas/edit.component';
import { NewComponent } from './components/usuarios/new.component';
import { GenerosComponent } from './components/generos/generos.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { NewSongComponent } from './components/canciones/new.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { UsuarioseditComponent } from './components/usuarios/usuariosedit.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent,
    EstiloComponent,
    HomeComponent,
    FondoComponent,
    FooterComponent,
    ArtistasComponent,
    EditComponent,
    NewComponent,
    GenerosComponent,
    CancionesComponent,
    NewSongComponent,
    UsuarioseditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
