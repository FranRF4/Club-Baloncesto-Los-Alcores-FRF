export class Equipo {
    private _id: number;
    private _nombre: string;
    private _categoria: string;
    private _escudo: string;
    private _nombreCampo: string;
    private _ubiCampo: string;
    private _colorLocal: string;
    private _colorVisit: string;

    constructor(id: number, nombre: string, categoria: string, escudo: string, 
        nombreCampo: string, ubiCampo: string, colorLocal: string, colorVisit: string) {
        this._id = id;
        this._nombre = nombre;
        this._categoria = categoria;
        this._escudo = escudo;
        this._nombreCampo = nombreCampo;
        this._ubiCampo = ubiCampo;
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

    public get nombreCampo(): string {
        return this._nombreCampo;
    }

    public set nombreCampo(value: string) {
        this._nombreCampo = value;
    }

    public get ubiCampo(): string {
        return this._ubiCampo;
    }

    public set ubiCampo(value: string) {
        this._ubiCampo = value;
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