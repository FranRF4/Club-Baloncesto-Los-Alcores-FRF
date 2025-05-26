export class Equipo {
    private _id: number;
    private _nombre: string;
    private _categoria: string;
    private _escudo: string;
    private _nombre_campo: string;
    private _ubi_campo: string;
    private _colorLocal: string;
    private _colorVisit: string;

    constructor(id: number, nombre: string, categoria: string, escudo: string, 
        nombre_campo: string, ubi_campo: string, colorLocal: string, colorVisit: string) {
        this._id = id;
        this._nombre = nombre;
        this._categoria = categoria;
        this._escudo = escudo;
        this._nombre_campo = nombre_campo;
        this._ubi_campo = ubi_campo;
        this._colorLocal = colorLocal;
        this._colorVisit = colorVisit;
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

    public get categoria(): string {
        return this._categoria;
    }

    public set categoria(value: string) {
        this._categoria = value;
    }

    public get escudo(): string {
        return this._escudo;
    }

    public set escudo(value: string) {
        this._escudo = value;
    }

    public get nombre_campo(): string {
        return this._nombre_campo;
    }

    public set nombre_campo(value: string) {
        this._nombre_campo = value;
    }

    public get ubi_Campo(): string {
        return this._ubi_campo;
    }

    public set ubiCampo(value: string) {
        this._ubi_campo = value;
    }

    public get colorLocal(): string {
        return this._colorLocal;
    }

    public set colorLocal(value: string) {
        this._colorLocal = value;
    }

    public get colorVisit(): string {
        return this._colorVisit;
    }

    public set colorVisit(value: string) {
        this._colorVisit = value;
    }

}