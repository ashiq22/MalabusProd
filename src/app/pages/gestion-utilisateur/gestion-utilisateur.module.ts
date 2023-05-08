import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionUtilisateurRoutingModule } from './gestion-utilisateur-routing.module';
import { GestionUtilisateurComponent } from './gestion-utilisateur.component';


@NgModule({
  declarations: [
    GestionUtilisateurComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GestionUtilisateurRoutingModule
  ]
})
export class GestionUtilisateurModule { }
