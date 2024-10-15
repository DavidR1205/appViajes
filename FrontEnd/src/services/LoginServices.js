import axios from 'axios'

const api = 'http://localhost:8082/login'

export const getUsuarioByCredenciales = async() =>{

    const respuesta = await axios.get(api)
    return respuesta.data

}