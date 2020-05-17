import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.page.html',
  styleUrls: ['./geo-location.page.scss'],
})
export class GeoLocationPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Onde estou? ', coordinates.coords);

    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log('Bússola: ', position);
    });
  }

}
