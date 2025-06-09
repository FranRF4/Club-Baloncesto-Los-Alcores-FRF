import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Jugador } from 'src/app/models/jugador';
import { JugadorService } from 'src/app/services/jugador.service';
import { SeguidosService } from 'src/app/services/seguidos.service';

@Component({
  selector: 'app-jugador',
  templateUrl: 'jugador.page.html',
  styleUrls: ['jugador.page.scss'],
  standalone: false,
})
export class JugadorPage {

  public jugadorLista: Jugador[] = [];
  public jugadorSeleccionado: Jugador | null = null;
  public idUsuario: number | null = null;
  public yaSigue: boolean = false;  // Aquí guardamos si sigue o no

  constructor(
    private jugadorService: JugadorService,
    private seguidosService: SeguidosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerIdToken();
    this.todosJugadores();
  }

  private todosJugadores(): void {
    this.jugadorService.jugadores().subscribe((data) => {
      this.jugadorLista = data;
    });
  }

  public jugadorId(id: number): void {
    this.jugadorService.jugadorPorId(id).subscribe((data) => {
      this.jugadorSeleccionado = data;
      if (this.idUsuario !== null) {
        this.comprobarSiSigueJugador(id);
      }
    });
  }

  private comprobarSiSigueJugador(idJugador: number): void {
    if (this.idUsuario === null) {
      this.yaSigue = false;
      return;
    }
    this.seguidosService.comprobarSiSigue(this.idUsuario, idJugador).subscribe({
      next: (sigue) => {
        this.yaSigue = sigue;
      },
      error: () => {
        this.yaSigue = false;
      }
    });
  }

  public seguirJugador(): void {
    if (!this.jugadorSeleccionado || this.idUsuario === null) {
      alert('Usuario o jugador no válido.');
      return;
    }

    this.seguidosService
      .seguirJugador(this.idUsuario, this.jugadorSeleccionado.id)
      .subscribe({
        next: () => {
          alert('Jugador seguido correctamente');
          this.yaSigue = true;  // Cambiamos a que ya sigue
        },
        error: () => {
           this.jugadorId(this.jugadorSeleccionado!.id);
        }
      });
  }

  public dejarDeSeguirJugador(): void {
    if (!this.jugadorSeleccionado || this.idUsuario === null) {
      alert('Usuario no logeado o jugador inválido.');
      return;
    }

    this.seguidosService
      .dejarDeSeguir(this.idUsuario, this.jugadorSeleccionado.id)
      .subscribe({
        next: () => {
          this.yaSigue = false;  // Cambiamos a que ya no sigue
        },
        error: () => {
          alert('Error al dejar de seguir');
        }
      });
  }

  obtenerIdToken() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.idUsuario = null;
      return;
    }
    try {
      const tokenData: any = jwtDecode(token);
      const id = Number(tokenData.id);
      this.idUsuario = isNaN(id) ? null : id;
    } catch {
      this.idUsuario = null;
    }
  }

  public volverALista(): void {
    this.jugadorSeleccionado = null;
  }

  public volverAtras(): void {
    window.history.back();
  }
}
