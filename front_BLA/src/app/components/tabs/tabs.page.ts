import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  constructor(private navCtrl: NavController) {}

  goToEquipo() {
  this.navCtrl.navigateRoot('/tabs/equipo/1');
}

}
