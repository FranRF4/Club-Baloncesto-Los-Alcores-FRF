import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partido } from 'src/app/models/partido';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-partido-detail',
  templateUrl: './partido-detail.page.html',
  styleUrls: ['./partido-detail.page.scss'],
  standalone: false
})
export class PartidoDetailPage implements OnInit {

  partidoDetailLista: Partido[] = [];
  public partidoSeleccionado: Partido | null = null;

  constructor(
    private partidoDetailService: PartidoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.partidoId(id);
    }
  }

  public partidoId(id: number): void {
    this.partidoDetailService.partidoPorId(id).subscribe((data) => {
      this.partidoSeleccionado = data;
    });
  }

  public volverALista(): void {
    window.history.back();
  } 

  formatHora(hora: string | number[] | any): string {
  if (typeof hora === 'string') {
    const partes = hora.split(',');
    const horas = partes[0].padStart(2, '0');
    const minutos = partes[1]?.padStart(2, '0') ?? '00';
    return `${horas}:${minutos}`;
  } else if (Array.isArray(hora)) {
    const horas = String(hora[0]).padStart(2, '0');
    const minutos = String(hora[1]).padStart(2, '0');
    return `${horas}:${minutos}`;
  } else {
    return '';
  }
}


} 

