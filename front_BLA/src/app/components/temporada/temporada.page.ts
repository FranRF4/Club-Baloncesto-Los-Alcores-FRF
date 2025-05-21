import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Temporada } from 'src/app/models/temporada';
import { TemporadaService } from 'src/app/services/temporada.service';

@Component({
  selector: 'app-temporada',
  templateUrl: 'temporada.page.html',
  styleUrls: ['temporada.page.scss'],
  standalone: false,
})
export class TemporadaPage {

  temporadaLista: Temporada[] = [];

  constructor(private temporadaService: TemporadaService, private router: Router) {}

  ngOnInit() {
    this.todasTemporadas();
  }

  private todasTemporadas(): void {
    this.temporadaService.temporadas().subscribe((data) => {
      this.temporadaLista = data;
      console.log(this.temporadaLista);
    });

}
}
