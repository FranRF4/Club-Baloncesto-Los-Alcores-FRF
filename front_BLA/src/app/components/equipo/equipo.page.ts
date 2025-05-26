import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: 'equipo.page.html',
  styleUrls: ['equipo.page.scss'],
  standalone: false,
})
export class EquipoPage implements OnInit {

  equipoLista: Equipo[] = [];
  public equipoSeleccionado: Equipo | null = null;
 

  constructor(private equipoService: EquipoService, private route: ActivatedRoute) {}

  ngOnInit() {
     const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.equipoId(id);
    }
  }

  private equipoId(id: number): void {
    this.equipoService.equipoPorId(id).subscribe((data) => {
      this.equipoSeleccionado = data;
    });
}

public volverALista(): void {
    window.history.back();
  } 
}

