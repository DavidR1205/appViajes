import axios from "axios";

const api = 'http://localhost:8082/programar'

export const getAllViajes = async()=>{

    const respuesta = await axios.get(api)
    return respuesta.data

}