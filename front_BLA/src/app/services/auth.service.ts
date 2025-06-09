import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:8080/api-CBLA/api/auth';

    constructor (private clientHttp: HttpClient) { }

        registrar(data: any): Observable<any> {
            return this.clientHttp.post(`${this.url}/registro`, data);
        }

        autentificar(data: any): Observable<any> {
             return this.clientHttp.post(`${this.url}/autentificar`, data);
        }

        
    
}