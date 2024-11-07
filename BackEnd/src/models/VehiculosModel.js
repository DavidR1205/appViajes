import { sql, getConnetion } from "../config/connetion.js"

const getAllVehiculos = async()=>{

    const con = await getConnetion
    const result = await con.request().query('SELECT * FROM vehiculos')
    return result.recordset

}

export {getAllVehiculos}

const createVehiculos = async (vehiculos) => {

    const {placa, numero_interno, marca, modelo, fecha_soat, fecha_tecno, 
            fecha_operacion, aseguradora, color, capacidad, tipo_vehiculo, chasis, nombre_propietario, numero_propietario} = vehiculos
    
    const con = await getConnetion
    await con.request()
    .input('placa', sql.VarChar, placa)
    .input('numero_interno', sql.Int, numero_interno)
    .input('marca', sql.VarChar, marca)
    .input('modelo', sql.VarChar, modelo)
    .input('fecha_soat', sql.Date, fecha_soat)
    .input('fecha_tecno', sql.Date, fecha_tecno)
    .input('fecha_operacion', sql.Date, fecha_operacion)
    .input('aseguradora', sql.VarChar, aseguradora)
    .input('color', sql.VarChar, color)
    .input('capacidad', sql.BigInt, capacidad)
    .input('tipo_vehiculo', sql.VarChar, tipo_vehiculo)
    .input('chasis', sql.VarChar, chasis)
    .input('nombre_propietario', sql.VarChar, nombre_propietario)
    .input('numero_propietario', sql.BigInt, numero_propietario)
    .query('INSERT INTO vehiculos VALUES(@placa, @numero_interno, @marca, @modelo, @fecha_soat, @fecha_tecno, @fecha_operacion, @aseguradora, @color, @capacidad, @tipo_vehiculo, @chasis, @nombre_propietario, @numero_propietario)')
}

export {createVehiculos}

const deleteVehiculos = async (vehiculos) => {

    const {id_vehiculo} = vehiculos
    try {
        const con = await getConnetion
        await con.request()
        .input('id_vehiculo', sql.BigInt, id_vehiculo)
        .query('DELETE FROM vehiculos WHERE id_vehiculo = @id_vehiculo')
    } catch (error) {
        console.log(error)
    }

}

export {deleteVehiculos}