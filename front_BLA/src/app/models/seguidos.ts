export class Usuario {
    private _id: number;
    private _idJugador: number;
    private _idUsuario: number;


    constructor(id: number, idJugador: number, idUsuario: number) {
        this._id = id;
        this._idJugador = idJugador;
        this._idUsuario = idUsuario;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get idJugador(): number {
        return this._idJugador;
    }

    public set idJugador(value: number) {
        this._idJugador = value;
    }

    public get idUsuario(): number {
        return this._idUsuario;
    }

    public set idUsuario(value: number) {
        this._idUsuario = value;
    }

    
}