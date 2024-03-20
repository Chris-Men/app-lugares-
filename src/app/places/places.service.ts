import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  public places: Place[] = [ // Cambiando 'private' por 'public'
      {
        id: '1',
        title: 'Torre Eiffel',
        imageURL: 'https://images.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-221/maravillas-desde-mi-pantalla-torre-eiffel-m.jpg?tx=w_680',
        comments: ['Paris es increible']
      },
      {
        id: '2',
        title: 'Estatua de la Libertad',
        imageURL: 'https://estatuadelalibertad.info/wp-content/uploads/2019/04/foto-estatua-de-la-libertad.jpg',
        comments: ['¡Increíble la estatua de la  libertad!' ]
      },
      {
        id: '3',
        title: 'Las cataratas de Staubbach',
        imageURL: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/SGOY6XR4M5D3NIMOHYHEQ42PZQ.jpg',
        comments: ['Un lugar magico']
      },
      {
        id: '4',
        title: 'Bruselas',
        imageURL: 'https://images.hola.com/imagenes/viajes/20190314138965/lugares-bonitos-belgica/0-658-681/lugares-mas-bonitos-belgica-m.jpg?tx=w_680',
        comments: ['Simplemente magnifico' ]
      },
      {
        id: '5',
        title: 'Bergen',
        imageURL: 'https://www.viajablog.com/wp-content/uploads/2017/04/Vista-panorámica-Bryggen-en-Bergen-Noruega.jpg',
        comments: ['Increible lugar de Noruega']
      },
      {
        id: '6',
        title: 'Atomium',
        imageURL: 'https://live.staticflickr.com/65535/51829225940_6686de5609_b.jpg',
        comments: ['Descubrir una gran aventura' ]
      },
      {
        id: '7',
        title: 'Hong Kong',
        imageURL: 'https://images.hola.com/imagenes/viajes/20171120102214/viajes-Hong-kong-china-que-ver/0-509-123/hong-kong-tradicion-y-modernidad-t.jpg',
        comments: ['Descubrir una gran aventura' ]
      },
      {
        id: '8',
        title: 'Tenerife',
        imageURL: 'https://a.cdn-hotels.com/gdcs/production58/d1295/5f9d4694-8ce6-4ad8-8bf7-87b4678b67ef.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        comments: ['Descubrir una gran aventura' ]
      },
      {
        id: '9',
        title: 'Torres del Paine',
        imageURL: 'https://torresdelpaine.com/wp-content/uploads/sites/6/2023/08/tdp-atractivo-panoramicas-06-600x338.jpg',
        comments: ['Descubrir una gran aventura' ]
      },
      
      
  

  ];

  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  getPlace(placeId: string): Place | undefined {
    const place = this.places.find(place => place.id === placeId);
    return place ? { ...place } : undefined;
  }
  

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""

    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {return place.id !== placeId
    })
  }

}
