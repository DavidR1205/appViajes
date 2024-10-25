import axios from 'axios'

const api = 'http://localhost:8082/conductores'

export const getAllConductores = async()=>{ 

    const respuesta = await axios.get(api)
    return respuesta.data

}