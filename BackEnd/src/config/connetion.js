import sql from'mssql';
import dotenv from 'dotenv';
dotenv.config();

const stringConnetion={
    user:process.env.USER,
    password:process.env.PASSWORD,
    server:process.env.SERVER,
    database:process.env.DATABASE,
    options:{
        trsutServerCertificate:true,
    },
};

const getConnetion=async()=>{
    try {
        await sql.connect(stringConnetion);
        console.log('conectado mono es gay')
    } catch (error) {
        console.log('error',error);
        process.exit(1);
    }

}

export{sql,getConnetion}