import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jugador } from "../models/jugador";

@Injectable({
    providedIn: 'root'
})
export class SeguidosService {
    private url = 'http://localhost:8080/api-CBLA/api/usuarioSigueJugadores';

    constructor (private clientHttp: HttpClient) { }

    seguidosPorUsuario(idUsuario: number): Observable<Jugador[]> {
        return this.clientHttp.get<Jugador[]>(`${this.url}/${idUsuario}/jugadores`);
    }

     seguirJugador(idUsuario: number, idJugador: number) {
  return this.clientHttp.post(`${this.url}/${idUsuario}/seguir/${idJugador}`, null);
}

    comprobarSiSigue(idUsuario: number, idJugador: number): Observable<boolean> {
        return this.clientHttp.get<boolean>(`${this.url}/${idUsuario}/sigue/${idJugador}`);
    }

    dejarDeSeguir(idUsuario: number, idJugador: number): Observable<any> {
    return this.clientHttp.delete(`${this.url}/${idUsuario}/seguir/${idJugador}`);
    }
    
}