import axios from 'axios'

const api = 'http://localhost:8082/rutasA'

export const getAllRutas = async()=>{ 

    const respuesta = await axios.get(api)
    return respuesta.data

}