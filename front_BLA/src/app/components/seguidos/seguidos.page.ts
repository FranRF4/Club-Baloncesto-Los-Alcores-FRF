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
export class SeguidosPage implements OnInit {

  jugadores: Jugador[] = [];
  public idUsuario : number | null = null; 

  constructor(private seguidosService: SeguidosService) {}

  ngOnInit(): void {
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
      },
      error: (error) => {
        console.error('Error al cargar jugadores:', error);
      }
    });
  }
}
