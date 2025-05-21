import { Equipo } from "./equipo";

export class Jugador {
    private _id: number;
    private _nombre: string;
    private _apellidos: string;
    private _imagen: string;
    private _edad: number;
    private _numero: number;
    private _posicion: string;
    private _esEntrenador: boolean;
    private _equipo: Equipo;

    constructor(id: number, nombre: string, apellidos: string, imagen: string, edad: number, 
        numero: number, posicion: string, esEntrenador: boolean, equipo: Equipo) {
        this._id = id;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._imagen = imagen;
        this._edad = edad;
        this._numero = numero;
        this._posicion = posicion;
        this._esEntrenador = esEntrenador;
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

    public get numero(): number {
        return this._numero;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public get posicion(): string {
        return this._posicion;
    }

    public set posicion(value: string) {
        this._posicion = value;
    }

    public get esEntrenador(): boolean {
        return this._esEntrenador;
    }

    public set esEntrenador(value: boolean) {
        this._esEntrenador = value;
    }

    public get equipo(): Equipo {
        return this._equipo;
    }

    public set equipo(value: Equipo) {
        this._equipo = value;
    }
}