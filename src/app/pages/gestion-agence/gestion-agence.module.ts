import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionAgenceRoutingModule } from './gestion-agence-routing.module';
import { GestionAgenceComponent } from './gestion-agence.component';


@NgModule({
  declarations: [
    GestionAgenceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GestionAgenceRoutingModule
  ]
})
export class GestionAgenceModule { }
