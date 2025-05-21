export class Temporada {
    private _id: number;
    private _anio: number;
    private _categoria: string;

    constructor(id: number, anio: number, categoria: string){
        this._id = id;
        this._anio = anio;
        this._categoria = categoria;
    }

    public get id(): number {   return this._id;}
    public set id(value: number) { this._id = value; }
    public get anio(): number { return this._anio; }
    public set anio(value: number) { this._anio = value; }
    public get categoria(): string { return this._categoria; }
    public set categoria(value: string) { this._categoria = value; }
}