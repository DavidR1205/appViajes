import { sql } from "../config/connetion.js"

const getAllVehiculos = async()=>{
    try {
        const vehiculos = await sql.query('SELECT * FROM vehiculos')
        return vehiculos.recordset;
    } catch (error) {
        throw error;
    }
}

export {getAllVehiculos}