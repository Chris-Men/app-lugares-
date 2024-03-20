import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place | undefined; // Inicializamos place como tipo Place o undefined

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId') || ''; // Asignamos un valor por defecto si recipeId es nulo
      this.place = this.placesService.getPlace(recipeId);
    });
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: '¿Estas seguro?',
      message: 'Cuidado',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: ()=>{
            if (this.place) {
              this.placesService.deletePlace(this.place.id);
              this.router.navigate(['/places'])
            }
          }
        }
      ]
    });
    await alertElement.present();

  }
  
}
