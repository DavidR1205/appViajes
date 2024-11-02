import { getConnetion, sql } from "../config/connetion.js";

const getUsuarioByCredenciales = async(correo, contrasena) => {
    
    const con = await getConnetion
    const query = `SELECT *
            FROM usuario
            WHERE correo = @correo AND contrasena = @contrasena`;

    const request = con.request();
    request.input('correo', sql.VarChar, correo);
    request.input('contrasena', sql.VarChar, contrasena);

    const result = await request.query(query);
    return result.recordset;

}
export { getUsuarioByCredenciales };

const getAllUsuarios = async()=>{

    const con = await getConnetion
    const result = await con.request().query('SELECT * FROM usuario')
    return result.recordset
    /*try {
        const usuarios = await sql.query('SELECT * FROM usuario')
        return usuarios.recordset;
    } catch (error) {
        throw error;
    }*/
}

export {getAllUsuarios};
