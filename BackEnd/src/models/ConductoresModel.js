import { sql, getConnetion } from "../config/connetion.js";

const getAllConductores = async () => {
    const con = await getConnetion();
    const result = await con.request().query('SELECT e.*, dp.*, de.*, dl.* FROM empleado e LEFT JOIN datos_personales dp ON e.id_empleado = dp.id_empleado LEFT JOIN datos_educativos de ON e.id_empleado = de.id_empleado LEFT JOIN datos_laborales dl ON e.id_empleado = dl.id_empleado');
    return result.recordset;
};

const CreateConductores = async (empleado) => {
    const { id_empleado, primer_nombre,primer_apellido, nivel_educativo, cargo, salario } = empleado;

    try {
        const con = await getConnetion();

        await con.request()
            .input('id_empleado', sql.BigInt, id_empleado)
            .input('nombre', sql.VarChar, primer_nombre) 
            .input('apellido', sql.VarChar, primer_apellido)
            .query('INSERT INTO empleado(id_empleado, primer_nombre, primer_apellido) VALUES (@id_empleado, @nombre, @apellido)');

        await con.request()
            .input('id_empleado', sql.BigInt, id_empleado)
            .input('nivel_educativo', sql.VarChar, nivel_educativo)
            .query('INSERT INTO datos_educativos(id_empleado, nivel_educativo) VALUES (@id_empleado, @nivel_educativo)');

        await con.request()
            .input('id_empleado', sql.BigInt, id_empleado)
            .input('cargo', sql.VarChar, cargo)
            .input('salario', sql.Float, salario)
            .query('INSERT INTO datos_laborales(id_empleado, cargo, salario) VALUES (@id_empleado, @cargo, @salario)');
    } catch (error) {
        console.error( error)
    }
}

const DeleteConductores = async (id_empleado) => {
    try {
        const con = await getConnetion();

        await con.request()
            .input('id_empleado', sql.BigInt, id_empleado)
            .query('DELETE FROM datos_laborales WHERE id_empleado = @id_empleado');

        await con.request()
            .input('id_empleado', sql.BigInt, id_empleado)
            .query('DELETE FROM datos_educativos WHERE id_empleado = @id_empleado');

        await con.request()
            .input('id_empleado', sql.BigInt, id_empleado)
            .query('DELETE FROM empleado WHERE id_empleado = @id_empleado');

    
    } catch (error) {
        console.error(error)
    }
}
export { getAllConductores, CreateConductores, DeleteConductores }



