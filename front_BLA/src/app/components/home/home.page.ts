import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {


  constructor() {}

  ngOnInit() {
    };

// Dentro de tu componente .ts (ejemplo: home.page.ts)

slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: {
    delay: 4000,    // Cambia la imagen cada 4 segundos
    disableOnInteraction: false
  },
  loop: true       // Para que vuelva a empezar el carrusel
};

}


