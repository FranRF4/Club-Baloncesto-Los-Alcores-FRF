import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jornada } from 'src/app/models/jornada';
import { JornadaService } from 'src/app/services/jornada.service';

@Component({
  selector: 'app-jornada',
  templateUrl: 'jornada.page.html',
  styleUrls: ['jornada.page.scss'],
  standalone: false,
})
export class JornadaPage {

  jornadaLista: Jornada[] = [];

  constructor(private temporadaService: JornadaService, private router: Router) {}

  ngOnInit() {
    this.todasJornadas();
  }

  private todasJornadas(): void {
    this.temporadaService.jornadas().subscribe((data) => {
      this.jornadaLista = data;
      console.log(this.jornadaLista);
    });
}
}
