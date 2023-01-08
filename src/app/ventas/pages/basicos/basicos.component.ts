import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

nombreLower:string = 'May';
nombreUpper:string = 'MAY';
nombreCompleto: string = 'MaY OrtEGa'
fecha:Date = new Date();

}
