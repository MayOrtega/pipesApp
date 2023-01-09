import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) {}
  
  nombre:string = 'MAy';
  valor: number = 1000;
  
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  mostrarNombre(){
    console.log(this.nombre)
  }
}
