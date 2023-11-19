export interface IUsuario{
    id?: Number,
    nombre: String,
    apellido: String,
    correo: String,
    contraseña: String
}

export interface pago{
    pagoId: string;
    pago: boolean;
}