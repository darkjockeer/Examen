import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { NoteComponent } from 'src/pages/note/note.component';
import { helpComponent } from 'src/pages/help/help.component';
import { asistenciaTelefonicaComponent } from 'src/pages/asistenciaTelefonica/asistenciaTelefonica.component';
import { nivelesEmergenciaComponent } from 'src/pages/nivelesEmergencia/nivelesEmergencia.component';
import { reclamosSugerenciasComponent } from 'src/pages/reclamosSugerencias/reclamosSugerencias.component';
import { mapsComponent } from 'src/pages/maps/maps.component';

import { MainComponent } from 'src/pages/main/main.component';
import { RegistroComponent } from 'src/pages/registro/registro.component';
import { emergenciaGraveComponent } from 'src/pages/notasEmergencia/emergenciaGrave/emergenciaGrave.component';
import { emergenciaMediaComponent } from 'src/pages/notasEmergencia/emergenciaMedia/emergenciaMedia.component';
import { emergenciaMenorComponent } from 'src/pages/notasEmergencia/emergenciaMenor/emergenciaMenor.component';
import { sinEmergenciaComponent } from 'src/pages/notasEmergencia/sinEmergencia/sinEmergencia.component';



const routes: Routes = [

  {
    path:'',
    component:LoginComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'menu-principal',
    component:MainComponent
  },
  {
    path: 'notas',
    component: NoteComponent
  },
  {
    path:'help',
    component: helpComponent
  },
  {
    path: 'asistenciaTelefonica',
    component: asistenciaTelefonicaComponent
  },
  {
    path: 'nivelesEmergencia',
    component: nivelesEmergenciaComponent
   
  },
  {
    path: 'reclamosSugerencias',
    component: reclamosSugerenciasComponent
  },
  {
    path: 'maps',
    component: mapsComponent
  },
  {
    path:'emergenciaGrave',
    component: emergenciaGraveComponent
  },
  {
    path:'emergenciaMedia',
    component: emergenciaMediaComponent
  },
  {
    path:'emergenciaMenor',
    component: emergenciaMenorComponent
  },
  {
    path:'sinEmergencia',
    component: sinEmergenciaComponent
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
