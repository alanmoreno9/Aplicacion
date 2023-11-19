export interface IUsuario{
    id?: String,
    nombre: String,
    apellido: String,
    correo: String,
    contraseña: String
}

export interface pago{
    pagoId: string;
    pago: boolean;
}