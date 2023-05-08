import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgetPassRoutingModule } from './forget-pass-routing.module';
import { ForgetPassComponent } from './forget-pass.component';


@NgModule({
  declarations: [
    ForgetPassComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ForgetPassRoutingModule
  ]
})
export class ForgetPassModule { }
