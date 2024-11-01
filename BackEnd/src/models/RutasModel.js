import { getConnetion, sql } from "../config/connetion.js"

const getAllRutas = async()=>{

    const con = await getConnetion
    const result = await con.request().query('SELECT * FROM ruta')
    return result.recordset
   /*try {
        const rutas = await sql.query('SELECT * FROM ruta')
        return rutas.recordset;
    } catch (error) {
        throw error;
    }*/

}

const createRuta = async (ruta)=>{

    const {id_ruta,codigo_ruta,nombre_ruta} = ruta
    const con = await getConnetion
    await con.request()
    .input('id_ruta', sql.BigIn, id_ruta)
    .input('codigo_ruta', sql.VarChar, codigo_ruta)
    .input('nombre_ruta', sql.VarChar, nombre_ruta)
    .query('INSERT INTO ruta(id_ruta, codigo_ruta,nombre_ruta) VALUES (@id_ruta, @codigo_ruta, @nombre_ruta) ')

}

const DeleteRuta = async (ruta) =>{
    
    const {id_ruta} = ruta;
    try {
        const con = await getConnetion
        await con.request().input('id_ruta', sql.BigInt, id_ruta.query('DELETE FROM ruta WHERE id_ruta = @id_ruta'))
    } catch (error) {
        console.log(error)
        
    }

}
export {getAllRutas, DeleteRuta,createRuta}