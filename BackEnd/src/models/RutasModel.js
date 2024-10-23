import { sql } from "../config/connetion.js"

const getAllRutas = async()=>{
    try {
        const rutas = await sql.query('SELECT * FROM ruta')
        return rutas.recordset;
    } catch (error) {
        throw error;
    }
}

export {getAllRutas}