import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { SeguidosService } from 'src/app/services/seguidos.service';

@Component({
  selector: 'app-seguidos',
  templateUrl: 'seguidos.page.html',
  styleUrls: ['seguidos.page.scss'],
  standalone: false,
})
export class SeguidosPage  {

  jugadores: Jugador[] = [];
  public idUsuario : number | null = null; 

  yaSigueMap: { [jugadorId: number]: boolean } = {};


  constructor(private seguidosService: SeguidosService) {}

    ionViewWillEnter(): void {
    this.obtenerIdToken();
    this.cargarJugadoresSeguidos(this.idUsuario as number);
  }

  obtenerIdToken() {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      console.error("Token no encontrado");
      return;
    }

    try {
      const tokenData: any = jwtDecode(token);
      this.idUsuario = tokenData.id ;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  }

  cargarJugadoresSeguidos(idUsuario: number): void {
  this.seguidosService.seguidosPorUsuario(idUsuario).subscribe({
    next: (jugadores) => {
      this.jugadores = jugadores;

      jugadores.forEach(jugador => {
        this.comprobarSiSigueJugador(jugador.id);
      });
    },
    error: (error) => {
      console.error('Error al cargar jugadores:', error);
    }
  });
}

comprobarSiSigueJugador(idJugador: number): void {
  if (this.idUsuario === null) {
    this.yaSigueMap[idJugador] = false;
    return;
  }
  this.seguidosService.comprobarSiSigue(this.idUsuario, idJugador).subscribe({
    next: (sigue) => {
      this.yaSigueMap[idJugador] = sigue;
    },
    error: () => {
      this.yaSigueMap[idJugador] = false;
    }
  });
}

seguirJugador(jugadorId: number): void {
  if (this.idUsuario === null) {
    alert('Usuario no válido.');
    return;
  }

  this.seguidosService.seguirJugador(this.idUsuario, jugadorId).subscribe({
    next: () => {
      this.yaSigueMap[jugadorId] = true;
      alert('Jugador seguido correctamente');
    },
    error: () => {
      alert('Error al seguir al jugador');
    }
  });
}

dejarDeSeguirJugador(jugadorId: number): void {
  if (this.idUsuario === null) {
    alert('Usuario no válido.');
    return;
  }

  this.seguidosService.dejarDeSeguir(this.idUsuario, jugadorId).subscribe({
    next: () => {
      this.yaSigueMap[jugadorId] = false;
      this.cargarJugadoresSeguidos(this.idUsuario!); // recarga la lista
    },
    error: () => {
      alert('Error al dejar de seguir al jugador');
    }
  });
}



  
}
