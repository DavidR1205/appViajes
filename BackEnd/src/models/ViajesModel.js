import { sql, getConnetion } from "../config/connetion.js";

const getAllViajes = async () => {

    const con = await getConnetion
    const result = await con.request().query(
        `SELECT 
        p.fecha, 
        p.hora_inicio, 
        p.hora_fin, 
        p.duracion, 
        p.estado, 
        v.numero_interno, 
        r.codigo_ruta, 
        r.nombre_ruta, 
        e.primer_nombre, 
        e.segundo_nombre, 
        e.primer_apellido, 
        e.segundo_apellido, 
        u.correo 
    FROM viaje p 
    LEFT JOIN vehiculos v ON p.id_vehiculo = v.id_vehiculo 
    LEFT JOIN ruta r ON p.id_ruta = r.id_ruta 
    LEFT JOIN empleado e ON p.id_empleado = e.id_empleado 
    LEFT JOIN usuario u ON p.id_usuario = u.id_usuario`
    );

    return result.recordset

}

const createViaje = async (viajes) => {

    const { hora_inicio, hora_fin, duracion, estado, id_vehiculo, id_ruta, id_empleado, id_usuario, fecha } = viajes

    const con = await getConnetion

    await con.request()
        .input('hora_inicio', sql.VarChar, hora_inicio)
        .input('hora_fin', sql.VarChar, hora_fin)
        .input('duracion', sql.VarChar, duracion)
        .input('estado', sql.VarChar, estado)
        .input('id_vehiculo', sql.BigInt, id_vehiculo)
        .input('id_ruta', sql.BigInt, id_ruta)
        .input('id_empleado', sql.BigInt, id_empleado)
        .input('id_usuario', sql.Int, id_usuario)
        .input('fecha', sql.Date, fecha)
        .query('INSERT INTO viaje VALUES(@hora_inicio, @hora_fin, @duracion, @estado, @id_vehiculo, @id_ruta, @id_empleado, @id_usuario, @fecha)')
}

const deleteViaje = async (viajes) => {

    const { id_viaje } = viajes
    try {
        const con = await getConnetion
        await con.request()
            .input('id_viaje', sql.BigInt, id_viaje)
            .query('DELETE FROM viaje WHERE id_viaje = @id_viaje')
    } catch (error) {
        console.log(error)
    }

}

export { getAllViajes, createViaje, deleteViaje }