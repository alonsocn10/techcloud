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
    path: 'canciones/new',
    component: NewSongComponent,
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
