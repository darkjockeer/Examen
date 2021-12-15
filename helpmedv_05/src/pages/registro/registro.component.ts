import { Component, OnInit } from '@angular/core';
import { IPersona } from '../interfaz/IPersona';
import { PersonaService } from 'src/servicio/persona.service';

@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    public  persona: IPersona ={
        nombre: '',
        apellido: '',
        contrasena: '',
        fechaNacimiento: new Date(),
        usuario: '',
      }
          
      private servicio: PersonaService;

      constructor(personaServicio:PersonaService) {
        this.servicio = personaServicio; 
       }
    
      public agregarPersona(){
        console.log(this.persona);
        this.servicio.agregarPersona(this.persona)
        .subscribe(respuesta =>{
          console.log(respuesta);
        }) 
        
      }
    
      ngOnInit() {}
    
    }


