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
  public yaSigue = false;
  public idUsuario: number | null = null;

  constructor(
    private jugadorService: JugadorService, 
    private seguidosService: SeguidosService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerIdToken();
    this.todosJugadores();
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

      // Solo llamar si idUsuario no es null
      if (this.idUsuario !== null) {
        this.seguidosService
          .comprobarSiSigue(this.idUsuario, id)
          .subscribe((res) => (this.yaSigue = res));
      } else {
        this.yaSigue = false; // Por si acaso
      }
    });
  }

  public volverALista(): void {
    this.jugadorSeleccionado = null;
  }

  public volverAtras(): void {
    window.history.back();
  }

  obtenerIdToken() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      console.error("Token no encontrado");
      return;
    }

    try {
      const tokenData: any = jwtDecode(token);
      // Asegurar que es un número válido
      const id = Number(tokenData.id);
      this.idUsuario = isNaN(id) ? null : id;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      this.idUsuario = null;
    }
  }

  public seguirJugador(): void {
    if (!this.jugadorSeleccionado) return;
    if (this.idUsuario === null) {
      alert('Usuario no logeado.');
      return;
    }

    this.seguidosService
      .seguirJugador(this.idUsuario, this.jugadorSeleccionado.id)
      .subscribe({
        next: () => {
          this.yaSigue = true;
          alert('Jugador seguido correctamente');
        },
        error: (err) => {
          console.error(err);
          alert('Error al seguir al jugador');
        },
      });
      window.location.reload();
  }

}



