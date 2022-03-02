import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule, //Empaquetado del carrousel
    FormsModule //Controles del formulario
  ]
})
export class ComponentsModule { }
