import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
//CONEXIONES
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { EditComponent } from './components/artistas/edit.component';
import { LogGuard } from './log.guard';
import { NewComponent } from './components/usuarios/new.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { NewSongComponent } from './components/canciones/new.component';
import { UsuarioseditComponent } from './components/usuarios/usuariosedit.component';
import { ArtistasplistComponent } from './components/artistas/artistasplist.component';
import { GenerosnewComponent } from './components/generos/generosnew.component';
import { GenerosComponent } from './components/generos/generos.component';
import { GenerosplistComponent } from './components/generos/generosplist.component';
import { CancionesplistComponent } from './components/canciones/cancionesplist.component';
import { GenerosService } from './services/generos.service';
import { GenerosCancionesComponent } from './components/generos/generos-canciones.component';


//RUTAS
const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'artistas',
    component: ArtistasComponent

  },
  {
    path: 'artistas/new',
    component: EditComponent,
    canActivate: [AuthGuard]


  },
  {
    path: 'artistas/plist',
    component: ArtistasplistComponent,
    canActivate: [AuthGuard]


  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios/new',
    component: NewComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'usuarios/edit',
    component: UsuarioseditComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'canciones',
    component: CancionesComponent,
  },
  {
    path: 'canciones/plist',
    component: CancionesplistComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'canciones/new',
    component: NewSongComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'generos',
    component: GenerosComponent,

  },
  {
    path: 'generos/songs',
    component: GenerosCancionesComponent,

  },
  {
    path: 'generos/plist',
    component: GenerosplistComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'generos/new',
    component: GenerosnewComponent,
    canActivate: [AuthGuard]

  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
