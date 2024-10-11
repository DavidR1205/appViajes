import sql from'mssql';
import dotenv from 'dotenv';
dotenv.config();

const stringConnetion={
    user:process.env.USER,
    password:process.env.PASSWORD,
    server:process.env.SERVER,
    database:process.env.DATABASE,
    options:{
        trustServerCertificate: true,
    },
};

const getConnetion=async()=>{
    try {
        await sql.connect(stringConnetion);
        console.log('Conectado con Exito')
    } catch (error) {
        console.log('error',error);
        process.exit(1);
    }

}

export{sql,getConnetion}