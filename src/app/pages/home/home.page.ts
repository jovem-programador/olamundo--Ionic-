import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( public navCtrl: NavController) { }

  ngOnInit() {
  }

  // Ação do botão de lista
  listUsers() {
    this.navCtrl.navigateForward('lista');
  }

  // Ação do botão criar usuário
  createUsers() {
    this.navCtrl.navigateForward('usuarios/criar');
  }

  // Status do dispositivos
  devStatus() {
    this.navCtrl.navigateForward('dev/status');
  }

  // Ação do botão tirar fotos
  devCamera() {
    this.navCtrl.navigateForward('dev/camera');
  }

  // Localização do gps
  geoLocation() {
    this.navCtrl.navigateForward('dev/gps');
  }
}
