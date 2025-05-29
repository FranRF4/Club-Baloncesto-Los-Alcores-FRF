import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/models/partido';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-partido',
  templateUrl: 'partido.page.html',
  styleUrls: ['partido.page.scss'],
  standalone: false,
})
export class PartidoPage {

  partidoLista: Partido[] = [];

  public partidoSeleccionado: Partido | null = null;

  public jornadaSeleccionadaId: number | null = null;

  constructor(private partidoService: PartidoService, private router: Router) {}

  ngOnInit() {
    this.todosPartidos()
  }

  private todosPartidos(): void {
    this.partidoService.partidos().subscribe((data) => {
      this.partidoLista = data;
      console.log(this.partidoLista);
    });
}

  public partidoId(id: number): void {
  this.partidoService.partidoPorId(id).subscribe((data) => {
    this.partidoSeleccionado = data;
  });
}


verPartidosDeJornada(id: number) {
  this.jornadaSeleccionadaId = id;
  this.partidoService.partidosPorJornada(id).subscribe((data) => {
    this.partidoLista = data;
  });
}

volverAJornadas() {
  this.jornadaSeleccionadaId = null;
  this.partidoLista = [];
}

  public volverALista(): void {
    this.partidoSeleccionado = null;
}

}
