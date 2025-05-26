import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Partido } from "../models/partido";
import { Equipo } from "../models/equipo";
import { Jornada } from "../models/jornada";

@Injectable({
    providedIn: 'root'
})
export class PartidoService {
    private url = 'http://localhost:8080/api-CBLA/api/partidos';

    constructor (private clientHttp: HttpClient) { }

        partidos(): Observable<Partido[]> {
            return this.clientHttp.get<Partido[]>(this.url);
        }

        partidoPorId(id: number): Observable<Partido> {
            return this.clientHttp.get<Partido>(`${this.url}/${id}`);
        }

        crearPartido(partido: {equip_local: Equipo, equip_visit: Equipo,fecha: Date, hora: string, 
                puntosLocal: number, puntosVisitante: number, ganador: Equipo, jornada: Jornada}): Observable<any> {
            return this.clientHttp.post<Partido>(`${this.url}`, partido, {responseType: `text` as `json`});
        }

        actualizarPartido(id: number,partido: {equipoLocal: Equipo, equipoVisitante: Equipo,fecha: Date, hora: string, 
        puntosLocal: number, puntosVisitante: number, ganador: Equipo, jornada: Jornada}): Observable<any> {
            return this.clientHttp.put<Partido>(`${this.url}/${id}`, partido, {responseType: `text` as `json`});
        }

        borrarPartido(id: number): Observable<Partido> {
            return this.clientHttp.delete<Partido>(`${this.url}/${id}`);
        }

        partidosPorJornada(idJornada: number): Observable<Partido[]> {
  return this.clientHttp.get<Partido[]>(`${this.url}?idJornada=${idJornada}`);
}
    
}