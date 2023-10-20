export interface IConductores{
    id: Number,
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
    },
    desUbi: {
        lat: number,
        lng: number
    },
    asientosDisponibles: number
}