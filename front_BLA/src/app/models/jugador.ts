import { Equipo } from "./equipo";

export class Jugador {
    private _id: number;
    private _nombre: string;
    private _apellidos: string;
    private _imagen: string;
    private _edad: number;
    private _numero: number | null;
    private _posicion: string;
    private _es_entrenador: boolean;
    private _equipo: Equipo;

    constructor(id: number, nombre: string, apellidos: string, imagen: string, edad: number, 
        numero: number | null, posicion: string, es_entrenador: boolean, equipo: Equipo) {
        this._id = id;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._imagen = imagen;
        this._edad = edad;
        this._numero = numero;
        this._posicion = posicion;
        this._es_entrenador = es_entrenador;
        this._equipo = equipo;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }

    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get imagen(): string {
        return this._imagen;
    }

    public set imagen(value: string) {
        this._imagen = value;
    }

    public get edad(): number {
        return this._edad;
    }

    public set edad(value: number) {
        this._edad = value;
    }

    public get numero(): number | null {
        return this._numero;
    }

    public set numero(value: number | null) {
        if (this._es_entrenador) {
            this._numero = null;}
        this._numero = value;
    }

    public get posicion(): string {
        return this._posicion;
    }

    public set posicion(value: string) {
        this._posicion = value;
    }

    public get es_entrenador(): boolean {
        return this._es_entrenador;
    }

    public set es_entrenador(value: boolean) {
        this._es_entrenador = value;
    }

    public get equipo(): Equipo {
        return this._equipo;
    }

    public set equipo(value: Equipo) {
        this._equipo = value;
    }
}