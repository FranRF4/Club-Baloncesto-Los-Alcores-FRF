import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Jornada } from 'src/app/models/jornada';
import { Temporada } from 'src/app/models/temporada';
import { JornadaService } from 'src/app/services/jornada.service';

@Component({
  selector: 'app-jornada',
  templateUrl: 'jornada.page.html',
  styleUrls: ['jornada.page.scss'],
  standalone: false,
})
export class JornadaPage {
  jornadaLista: Jornada[] = [];

  public rol : string | null = null; 

  id!: number;
  semana!: number;
  mes!: number;
  fase: string = '';
  id_temporada!: Temporada;





  constructor(private jornadaService: JornadaService, private router: Router) {}

  ngOnInit() {
    this.todasJornadas();
    console.log('¿Es admin?', this.esAdmin());

  }

  private todasJornadas(): void {
    this.jornadaService.jornadas().subscribe({
      next: (data) => {
        this.jornadaLista = data;
        console.log(this.jornadaLista);
      },
      error: (err) => console.error('Error al obtener jornadas', err),
    });
  }

  obtenerRolToken() {
      const token = localStorage.getItem('jwtToken');
  
      if (!token) {
        console.error("Token no encontrado");
        return;
      }
  
      try {
        const tokenData: any = jwtDecode(token);
        this.rol = tokenData.rol ;
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }

  esAdmin(): boolean {
    if (!this.rol) {
      this.obtenerRolToken();
    }
    return this.rol === 'ADMIN';
  }

  crearJornada(form: NgForm): void {
    if (form.valid) {
      const nuevaJornada = {
        semana: this.semana,
        mes: this.mes,
        fase: this.fase,
        id_temporada: { id: this.id_temporada?.id ?? 1 } as Temporada,

      };

      this.jornadaService.crearJornada(nuevaJornada).subscribe({
        next: () => {
          console.log('Jornada creada');
          form.reset();
          this.todasJornadas();
        },
        error: (err) => console.error('Error al crear jornada', err),
      });
    }
  }

  actualizarJornada(form: NgForm): void {
    if (form.valid) {
      const jornadaActualizada = {
        id: this.id,
        semana: this.semana,
        mes: this.mes,
        fase: this.fase,
        id_temporada: { id: this.id_temporada?.id ?? 1 } as Temporada,

      };
      this.jornadaService.actualizarJornada(this.id, jornadaActualizada).subscribe({
        next: () => {
          console.log('Jornada actualizada');
          form.reset();
          this.todasJornadas();
        },
        error: (err) => console.error('Error al actualizar jornada', err),
      });
    }
  }

  borrarJornada(id: number) {
    if (confirm('¿Seguro que deseas eliminar esta jornada?')) {
      this.jornadaService.borrarJornada(id).subscribe({
        next: () => {
          console.log('Jornada eliminada');
          this.todasJornadas();
        },
        error: (err) => console.error('Error al eliminar jornada', err),
      });
    }
  }
}
