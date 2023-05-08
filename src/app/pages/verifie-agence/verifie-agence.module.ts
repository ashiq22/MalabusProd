import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifieAgenceRoutingModule } from './verifie-agence-routing.module';
import { VerifieAgenceComponent } from './verifie-agence.component';


@NgModule({
  declarations: [
    VerifieAgenceComponent
  ],
  imports: [
    CommonModule,
    VerifieAgenceRoutingModule
  ]
})
export class VerifieAgenceModule { }
