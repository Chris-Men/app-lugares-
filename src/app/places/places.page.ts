import { Component, OnInit } from '@angular/core';
import {PlacesService} from './places.service';
import { Place } from './place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places: Place[] = []; // Definir explícitamente el tipo de places como Place[]

  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {  
    this.places = this.placeService.getPlaces()
  }

  ionViewWillEnter(){
    this.places = this.placeService.getPlaces();
  }

  addNewPlace(){
    this.router.navigate(['/new-place']);
  }

}


