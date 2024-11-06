import { sql, getConnetion } from "../config/connetion.js";

const getAllConductores = async () => {
    const con = await getConnetion;
    const result = await con.request().query(`
        SELECT 
            e.id_empleado, 
            e.primer_nombre, 
            e.segundo_nombre, 
            e.primer_apellido, 
            e.segundo_apellido, 
            e.numero_documento, 
            dp.correo_electronico,
            dl.cargo, 
            dl.salario
        FROM empleado e
        LEFT JOIN datos_personales dp ON e.id_empleado = dp.id_empleado
        LEFT JOIN datos_educativos de ON e.id_empleado = de.id_empleado
        LEFT JOIN datos_laborales dl ON e.id_empleado = dl.id_empleado
    `);
    return result.recordset;
};

const CreateConductores = async (empleado) => {
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_documento , numero_documento, genero, nacionalidad, fecha_nacimiento, 
            grado_escolaridad, estudios_activos, segundo_idioma, profesion,
            pais, departamento, ciudad, barrio, direccion, tipo_vivienda, celular, correo_electronico, estado_civil, medio_transporte,
            fecha_ingreso, eps, arl, fondo_cesantias, fondo_pension, cargo, tipo_contrato, correo_empresarial, salario } = empleado;

    try {
        const con = await getConnetion;

        const empleadoResult = await con.request()
            .input('primer_nombre', sql.VarChar, primer_nombre) 
            .input('segundo_nombre', sql.VarChar, segundo_nombre) 
            .input('primer_apellido', sql.VarChar, primer_apellido)
            .input('segundo_apellido', sql.VarChar, segundo_apellido)
            .input('tipo_documento', sql.VarChar, tipo_documento)
            .input('numero_documento', sql.BigInt, numero_documento)
            .input('genero', sql.VarChar, genero)
            .input('nacionalidad', sql.VarChar, nacionalidad)
            .input('fecha_nacimiento', sql.Date, fecha_nacimiento)
            .query('INSERT INTO empleado VALUES (@primer_nombre, @segundo_nombre, @primer_apellido, @segundo_apellido, @tipo_documento, @numero_documento, @genero, @nacionalidad, @fecha_nacimiento); SELECT SCOPE_IDENTITY() AS id');

            const id_empleado = empleadoResult.recordset[0].id;

        await con.request()
            .input('grado_escolaridad', sql.VarChar, grado_escolaridad)
            .input('estudios_activos', sql.VarChar, estudios_activos)
            .input('segundo_idioma', sql.VarChar, segundo_idioma)
            .input('id_empleado', sql.BigInt, id_empleado)
            .input('profesion', sql.VarChar, profesion)
            .query('INSERT INTO datos_educativos VALUES (@grado_escolaridad, @estudios_activos, @segundo_idioma, @id_empleado, @profesion)');

        await con.request()
            .input('pais', sql.VarChar, pais)
            .input('departamento', sql.VarChar, departamento)
            .input('ciudad', sql.VarChar, ciudad)
            .input('barrio', sql.VarChar, barrio)
            .input('direccion', sql.VarChar, direccion)
            .input('tipo_vivienda', sql.VarChar, tipo_vivienda)
            .input('celular', sql.BigInt, celular)
            .input('correo_electronico', sql.VarChar, correo_electronico)
            .input('estado_civil', sql.VarChar, estado_civil)
            .input('medio_transporte', sql.VarChar, medio_transporte)
            .input('id_empleado', sql.BigInt, id_empleado)
            .query('INSERT INTO datos_personales VALUES (@pais, @departamento, @ciudad, @barrio, @direccion, @tipo_vivienda, @celular, @correo_electronico, @estado_civil, @medio_transporte, @id_empleado)');

        await con.request()
            .input('fecha_ingreso', sql.Date, fecha_ingreso)
            .input('eps', sql.VarChar, eps)
            .input('arl', sql.VarChar, arl)
            .input('fondo_cesantias', sql.VarChar, fondo_cesantias)
            .input('fondo_pension', sql.VarChar, fondo_pension)
            .input('cargo', sql.VarChar, cargo)
            .input('tipo_contrato', sql.VarChar, tipo_contrato)
            .input('correo_empresarial', sql.VarChar, correo_empresarial)
            .input('salario', sql.Float, salario)
            .input('id_empleado', sql.BigInt, id_empleado)
            .query('INSERT INTO datos_laborales VALUES (@fecha_ingreso, @eps, @arl, @fondo_cesantias, @fondo_pension, @cargo, @tipo_contrato, @correo_empresarial, @salario, @id_empleado)');
    } catch (error) {
        console.error( error)
    }
}

const DeleteConductores = async (id_empleado) => {
    
    try {
        const con = await getConnetion;

        await con.request()
            .input('id_empleado', sql.BigInt, id_empleado)
            .query('DELETE FROM datos_personales WHERE id_empleado = @id_empleado');

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



