import axios from "axios";

export const insertVital = async(valores) =>{
    //return await axios.post('https://api.testsoftware.dev:4000/api/create', valores)
    return await axios.post('http://localhost:4000/api/create', valores)
}

export const getAllVital = async() =>{ 
    //return await axios.post('https://api.testsoftware.dev:4000/api/getAll')
    return await axios.get('http://localhost:4000/api/getAll', {withCredentials: true})
}