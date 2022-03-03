import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ImagesComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule, //Empaquetado del carrousel
    FormsModule,
    ReactiveFormsModule
     //Controles del formulario
  ]
})
export class ComponentsModule { }
