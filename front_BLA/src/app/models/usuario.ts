
export type Rol = 'ADMIN' | 'USER';
export class Usuario {
    private _id: number;
    private _username: string;
    private _email: string;
    private _password: string;
    private _createdAt: Date;
    private _rol: Rol = 'USER';

    constructor(id: number, username: string, email: string, password: string, createdAt: Date, rol: Rol = 'USER') {
        this._id = id;
        this._username = username;
        this._email = email;
        this._password = password;
        this._createdAt = createdAt;
        this._rol = rol;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    public get rol(): Rol {
        return this._rol;
    }

    public set rol(value: Rol) {
        this._rol = value;
    }
}