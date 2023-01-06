import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumeroComponent } from './pages/numero/numero.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';



@NgModule({
  declarations: [
    NumeroComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  exports:[
    NumeroComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class VentasModule { }
