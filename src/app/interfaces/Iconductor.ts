export interface IConductor{
    nombre: String,
    apellido: String,
    correo: String,
    contraseña: String,
    telefono: Number,
    marca: String,
    modelo: String,
    año: String,
    placa: String
    rut: String,
    estado: boolean,
    meUbi: {
        lat: number,
        lng: number
    } | null,
    desUbi: {
        lat: number,
        lng: number
    } | null,
    asientosDisponibles: number
}