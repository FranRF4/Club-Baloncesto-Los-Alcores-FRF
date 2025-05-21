import { Temporada } from "./temporada";

export class Jornada {
    private _id: number;
    private _semana: number;
    private _mes: number;
    private _fase: string;
    private _temporada: Temporada;
    


    constructor(id: number, semana: number, mes: number, fase: string, temporada: Temporada){
        this._id = id;
        this._semana = semana;
        this._mes = mes;
        this._fase = fase;
        this._temporada = temporada;
    }

    public get id(): number {
         return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get semana(): number {
        return this._semana;
    }

    public set semana(value: number) {
        this._semana = value;
    }

    public get mes(): number {
        return this._mes;
    }

    public set mes(value: number) {
        this._mes = value;
    }

    public get fase(): string {
        return this._fase;
    }

    public set fase(value: string) {
        this._fase = value;
    }

    public get temporada(): Temporada {
        return this._temporada;
    }

    public set temporada(value: Temporada) {
        this._temporada = value;
    }
}
