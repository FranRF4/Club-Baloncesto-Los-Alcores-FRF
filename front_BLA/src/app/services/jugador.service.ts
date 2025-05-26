import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jugador } from "../models/jugador";
import { Equipo } from "../models/equipo";

@Injectable({
    providedIn: 'root'
})
export class JugadorService {
    private url = 'http://localhost:8080/api-CBLA/api/jugadores';

    constructor (private clientHttp: HttpClient) { }

        jugadores(): Observable<Jugador[]> {
            return this.clientHttp.get<Jugador[]>(this.url);
        }

        jugadorPorId(id: number): Observable<Jugador> {
            return this.clientHttp.get<Jugador>(`${this.url}/${id}`);
        }

        crearJugador(jugador: {nombre: string, apellidos: string, imagen: string, edad: number, 
                numero: number, posicion: string, esEntrenador: boolean, equipo: Equipo}): Observable<any> {
            return this.clientHttp.post<Jugador>(`${this.url}`, jugador, {responseType: `text` as `json`});
        }

        actualizarJugador(id: number,jugador: {nombre: string, apellidos: string, imagen: string, edad: number, 
        numero: number, posicion: string, esEntrenador: boolean, equipo: Equipo}): Observable<any> {
            return this.clientHttp.put<Jugador>(`${this.url}/${id}`, jugador, {responseType: `text` as `json`});
        }

        borrarJugador(id: number): Observable<Jugador> {
            return this.clientHttp.delete<Jugador>(`${this.url}/${id}`);
        }
    
}