import { sql } from "../config/connetion.js";

const getUsuarioByCredenciales = async(correo, contrasena) => {
    try {
        const pool = await sql.connect();
        const query = `
            SELECT *
            FROM usuario
            WHERE correo = @correo AND contrasena = @contrasena
        `;
        
        const request = pool.request()
        request.input('correo',sql.VarChar, correo);
        request.input('contrasena',sql.VarChar, contrasena);

        const result = await request.query(query);
        return result.recordset;
    } catch (error) {
        console.error("Error en getUsuarioByCredenciales:", error);
        throw error;
    }
}
export { getUsuarioByCredenciales };

const getAllUsuarios = async()=>{
    try {
        const usuarios = await sql.query('SELECT * FROM usuario')
        return usuarios.recordset;
    } catch (error) {
        throw error;
    }
}

export {getAllUsuarios};
