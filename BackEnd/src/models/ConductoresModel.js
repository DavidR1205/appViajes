import { sql } from "../config/connetion.js"

const getAllConductores = async () => {
    try {
        const conductores = await sql.query('SELECT e.*, dp.*, de.*, dl.* FROM empleado e LEFT JOIN datos_personales dp ON e.id_empleado = dp.id_empleado LEFT JOIN datos_educativos de ON e.id_empleado = de.id_empleado LEFT JOIN datos_laborales dl ON e.id_empleado = dl.id_empleado')
        return conductores.recordset;
    } catch (error) {
        throw error;
    }
}

export { getAllConductores }