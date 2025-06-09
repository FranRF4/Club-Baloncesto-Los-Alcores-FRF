import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: 'jugador.page.html',
  styleUrls: ['jugador.page.scss'],
  standalone: false,
})
export class JugadorPage {

  jugadorLista: Jugador[] = [];

  public jugadorSeleccionado: Jugador | null = null;

  constructor(private jugadorService: JugadorService, private router: Router) {}

  ngOnInit() {
    this.todosJugadores()
    console.log(localStorage.getItem('jwtToken'));
  }

  private todosJugadores(): void {
    this.jugadorService.jugadores().subscribe((data) => {
      this.jugadorLista = data;
      console.log(this.jugadorLista);
    });
}

  public jugadorId(id: number): void {
  this.jugadorService.jugadorPorId(id).subscribe((data) => {
    this.jugadorSeleccionado = data;
  });
}

  public volverALista(): void {
    this.jugadorSeleccionado = null;
}

public volverAtras(): void {
    window.history.back();
  } 
}



