import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //18nSelect
  nombre:string = 'May';
  genero:string = 'femenino';
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['María', 'Pedro','Alex', 'Francisca'];
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando'

  }

  cambiarCliente(){
    this.nombre = 'Amaru'
    this.genero = 'masculino'
  }

  borrarCliente(){
    this.clientes.pop()
  }

  //Keyvalue pipe
  persona={
    nombre:'Fernando',
    edad:35,
    ubicación: 'Ottawa, Canadá'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: false
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {  nombre:'Aquaman',
      vuela:false
  }
  ]

  //Async Pipe
  miObservable = interval(1000)

  valorPromesa = new Promise ( (resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    }, 5000 );
  });
}
