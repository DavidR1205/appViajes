import { sql } from "../config/connetion.js";

const getAllViajes = async () => {
    try {
        const viajes = await sql.query('SELECT p.*, v.*, r.*, e.*, u.* FROM viaje p LEFT JOIN vehiculos v ON p.id_vehiculo = v.id_vehiculo LEFT JOIN ruta r ON p.id_ruta = r.id_ruta LEFT JOIN empleado e ON p.id_empleado = e.id_empleado LEFT JOIN usuario u ON p.id_usuario = u.id_usuario')
        return viajes.recordset
    } catch (error) {
        throw error;
    }
}

export { getAllViajes }