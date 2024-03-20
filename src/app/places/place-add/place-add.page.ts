import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {
  
  titleValue: string = ''; // Propiedad para almacenar el valor del título
  imageURLValue: string = ''; // Propiedad para almacenar el valor de la URL de la imagen

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  // Elimina los parámetros de la función, ya que ahora los valores se obtienen de las propiedades de la clase
  saveNewPlace() {
    this.placesService.addPlace(this.titleValue, this.imageURLValue);
    this.router.navigate(['/places']);
  }
}

