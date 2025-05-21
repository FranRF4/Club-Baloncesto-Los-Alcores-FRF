import { Equipo } from "./equipo";
import { Jornada } from "./jornada";

export class Partido {
    private _id: number;
    private _equipoLocal: Equipo;
    private _equipoVisitante: Equipo;
    private _fecha: Date;
    private _hora: string;
    private _puntosLocal: number;
    private _puntosVisitante: number;
    private _ganador: Equipo;
    private _jornada: Jornada;

    constructor(id: number, equipoLocal: Equipo, equipoVisitante: Equipo,fecha: Date, hora: string, 
        puntosLocal: number, puntosVisitante: number, ganador: Equipo, jornada: Jornada) {
        this._id = id;
        this._equipoLocal = equipoLocal;
        this._equipoVisitante = equipoVisitante;
        this._fecha = fecha;
        this._hora = hora;
        this._puntosLocal = puntosLocal;
        this._puntosVisitante = puntosVisitante;
        this._ganador = ganador;
        this._jornada = jornada;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get equipoLocal(): Equipo {
        return this._equipoLocal;
    }

    public set equipoLocal(value: Equipo) {
        this._equipoLocal = value;
    }

    public get equipoVisitante(): Equipo {
        return this._equipoVisitante;
    }

    public set equipoVisitante(value: Equipo) {
        this._equipoVisitante = value;
    }

    public get fecha(): Date {
        return this._fecha;
    }

    public set fecha(value: Date) {
        this._fecha = value;
    }

    public get hora(): string {
        return this._hora;
    }

    public set hora(value: string) {
        this._hora = value;
    }

    public get puntosLocal(): number {
        return this._puntosLocal;
    }

    public set puntosLocal(value: number) {
        this._puntosLocal = value;
    }

    public get puntosVisitante(): number {
        return this._puntosVisitante;
    }

    public set puntosVisitante(value: number) {
        this._puntosVisitante = value;
    }

    public get ganador(): Equipo {
        return this._ganador;
    }

    public set ganador(value: Equipo) {
        this._ganador = value;
    }

    public get jornada(): Jornada {
        return this._jornada;
    }

    public set jornada(value: Jornada) {
        this._jornada = value;
    }
}