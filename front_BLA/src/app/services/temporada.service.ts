import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Temporada } from "../models/temporada";

@Injectable({
    providedIn: 'root'
})
export class TemporadaService {
    private url = 'http://localhost:8080/api-CBLA/api/temporadas';

    constructor (private clientHttp: HttpClient) { }

        temporadas(): Observable<Temporada[]> {
            return this.clientHttp.get<Temporada[]>(this.url);
        }

        temporadaPorId(id: number): Observable<Temporada> {
            return this.clientHttp.get<Temporada>(`${this.url}/${id}`);
        }

        crearTemporada(temporada: {anio: number, categoria: string}): Observable<any> {
            return this.clientHttp.post<Temporada>(`${this.url}`, temporada, {responseType: `text` as `json`});
        }

        actualizarTemporada(id: number,temporada: {anio: number, categoria: string}): Observable<any> {
            return this.clientHttp.put<Temporada>(`${this.url}/${id}`, temporada, {responseType: `text` as `json`});
        }

        borrarTemporada(id: number): Observable<Temporada> {
            return this.clientHttp.delete<Temporada>(`${this.url}/${id}`);
        }
    
}