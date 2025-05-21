import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jornada } from "../models/jornada";
import { Temporada } from "../models/temporada";

@Injectable({
    providedIn: 'root'
})
export class JornadaService {
    private url = 'http://localhost:8080/api-CBLA/api/jornadas';

    constructor (private clientHttp: HttpClient) { }

    jornadas(): Observable<Jornada[]> {
            return this.clientHttp.get<Jornada[]>(this.url);
        }

        jornadasPorId(id: number): Observable<Jornada> {
            return this.clientHttp.get<Jornada>(`${this.url}/${id}`);
        }

        crearJornada(jornada: {semana: number, mes: number, fase: string,temporada: Temporada}): Observable<any> {
            return this.clientHttp.post<Jornada>(`${this.url}`, jornada, {responseType: `text` as `json`});
        }

        actualizarJornada(id: number,jornada: {semana: number, mes: number, fase: string,temporada: Temporada}): Observable<any> {
            return this.clientHttp.put<Jornada>(`${this.url}/${id}`, jornada, {responseType: `text` as `json`});
        }

        borrarJornada(id: number): Observable<Jornada> {
            return this.clientHttp.delete<Jornada>(`${this.url}/${id}`);
        }
    
}