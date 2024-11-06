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

const createUsuario = async (usuario) => {

    const {primer_nombre_user, segundo_nombre_user, primer_apellido_user, segundo_apellido_user, 
        tipo_documento, numero_documento, correo, estado_user, contrasena, id_rol} = usuario

    const con = await getConnetion
    await con.request()
    .input('primer_nombre_user', sql.VarChar, primer_nombre_user)
    .input('segundo_nombre_user', sql.VarChar, segundo_nombre_user)
    .input('primer_apellido_user', sql.VarChar, primer_apellido_user)
    .input('segundo_apellido_user', sql.VarChar, segundo_apellido_user)
    .input('tipo_documento', sql.VarChar, tipo_documento)
    .input('numero_documento', sql.BigInt, numero_documento)
    .input('correo', sql.VarChar, correo)
    .input('contrasena', sql.VarChar, contrasena)
    .input('estado_user', sql.VarChar, estado_user)
    .input('id_rol', sql.BigInt, id_rol)
    .query('INSERT INTO usuario VALUES(@primer_nombre_user, @segundo_nombre_user, @primer_apellido_user, @segundo_apellido_user, @tipo_documento, @numero_documento, @correo, @estado_user, @contrasena, @id_rol)')

}

export {createUsuario}

const deleteUsuario = async (usuario) => {

    const {id_usuario} = usuario
    try {
        const con = await getConnetion
        await con.request()
        .input('id_usuario', sql.Int, id_usuario)
        .query('DELETE FROM usuario WHERE id_usuario = @id_usuario')
    } catch (error) {
        console.log(error)
    }

}

export {deleteUsuario}
