import { sql } from "../config/connetion.js"

const getAllConductores = async()=>{
    try {
        const conductores = await sql.query('SELECT * FROM conductores')
        return conductores.recordset;
    } catch (error) {
        throw error;
    }
}

export {getAllConductores}