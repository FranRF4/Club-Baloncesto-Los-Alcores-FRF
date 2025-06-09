import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private url = 'http://localhost:8080/api-CBLA/api/usuarios';

    constructor (private clientHttp: HttpClient) { }

        usuarios(): Observable<Usuario[]> {
            return this.clientHttp.get<Usuario[]>(this.url);
        }

        usuarioPorId(id: number): Observable<Usuario> {
            return this.clientHttp.get<Usuario>(`${this.url}/${id}`);
        }

        crearUsuario(usuario: {username: number, email: string, password: string}): Observable<any> {
            return this.clientHttp.post<Usuario>(`${this.url}`, usuario, {responseType: `text` as `json`});
        }

        actualizarUsuario(id: number,usuario: {username: number, email: string, password: string}): Observable<any> {
            return this.clientHttp.put<Usuario>(`${this.url}/${id}`, usuario, {responseType: `text` as `json`});
        }

        borrarUsuario(id: number): Observable<Usuario> {
            return this.clientHttp.delete<Usuario>(`${this.url}/${id}`);
        }
    
}