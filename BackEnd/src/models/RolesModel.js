import { getConnetion, sql } from "../config/connetion.js";

const getAllRoles = async() => {

    const con = await getConnetion
    const result = await  con.request().query('SELECT * FROM roles')
    return result.recordset

}

export {getAllRoles}