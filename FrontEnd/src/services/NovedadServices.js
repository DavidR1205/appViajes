import axios from "axios";

const api = 'http://localhost:8082/novedades'

export const getAllNovedades = async()=> {

    const respuesta = await axios.get(api)
    return respuesta.data

}