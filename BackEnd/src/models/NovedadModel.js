import { sql, getConnetion } from "../config/connetion.js"


const getAllNovedades = async () => {

    const con = await getConnetion
    const result = await con.request().query(
        `SELECT 
        n.id_novedad,
        n.tipo_novedad,
        n.observacion,
        v.hora_inicio,
        v.fecha, 
        r.codigo_ruta,
        r.nombre_ruta,
        u.numero_interno
    FROM novedad n 
    INNER JOIN viaje v ON n.id_viaje = v.id_viaje
    INNER JOIN ruta r ON v.id_ruta = r.id_ruta
    INNER JOIN vehiculos u ON v.id_vehiculo = u.id_vehiculo`
    )
    return result.recordset

}

const createNovedad = async (novedad) => {
    
    const { tipo_novedad, observacion, id_viaje } = novedad
    const con = await getConnetion

    await con.request()
        .input('tipo_novedad', sql.VarChar, tipo_novedad)
        .input('observacion', sql.VarChar, observacion)
        .input('id_viaje', sql.VarChar, id_viaje)
        .query('INSERT into novedad VALUES(@tipo_novedad, @observacion, @id_viaje)')
}

const deleteNovedad = async (novedad) => {

    const { id_novedad } = novedad
    try {
        const con = await getConnetion
        await con.request()
        .input('id_novedad', sql.BigInt, id_novedad)
        .query('DELETE FROM novedad WHERE id_novedad = @id_novedad')
    } catch (error) {
        console.log(error)
    }

}

export { getAllNovedades, createNovedad, deleteNovedad }