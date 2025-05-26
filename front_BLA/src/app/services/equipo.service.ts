import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Equipo } from "../models/equipo";

@Injectable({
    providedIn: 'root'
})
export class EquipoService {
    private url = 'http://localhost:8080/api-CBLA/api/equipos';

    constructor (private clientHttp: HttpClient) { }

        equipos(): Observable<Equipo[]> {
            return this.clientHttp.get<Equipo[]>(this.url);
        }

        equipoPorId(id: number): Observable<Equipo> {
            return this.clientHttp.get<Equipo>(`${this.url}/${id}`);
        }

        crearEquipo(equipo: {nombre: string, categoria: string, escudo: string, 
        nombre_campo: string, ubi_campo: string, colorLocal: string, colorVisit: string}): Observable<any> {
            return this.clientHttp.post<Equipo>(`${this.url}`, equipo, {responseType: `text` as `json`});
        }

        actualizarEquipo(id: number,equipo: {nombre: string, categoria: string, escudo: string, 
        nombre_campo: string, ubi_campo: string, colorLocal: string, colorVisit: string}): Observable<any> {
            return this.clientHttp.put<Equipo>(`${this.url}/${id}`, equipo, {responseType: `text` as `json`});
        }

        borrarEquipo(id: number): Observable<Equipo> {
            return this.clientHttp.delete<Equipo>(`${this.url}/${id}`);
        }
    
}