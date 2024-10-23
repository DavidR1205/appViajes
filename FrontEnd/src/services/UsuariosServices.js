import axios from 'axios'

 const api = 'http://localhost:8082/usuarios'

 export const getAllUsuarios =async()=>{

    const respuesta = await axios.get(api)
    return respuesta.data 

 }

 

