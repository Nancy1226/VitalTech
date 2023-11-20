import axios from "axios";

export const insertVital = async(valores) =>{
    //return await axios.post('https://api.testsoftware.dev:4000/api/create', valores)
    return await axios.post('http://localhost:4000/api/create', valores)
}

export const getAllVital = async() =>{ 
    //return await axios.get('https://api.testsoftware.dev:4000/api/getAll' {withCredentials: true})
    return await axios.get('http://localhost:4000/api/getAll', {withCredentials: true})
}

export const getOneMesaure = async() =>{
    //return await axios.get("https://api.testsoftware.dev:4000/api/lastOne", {withCredentials: true})
    return await axios.get("http://localhost:4000/api/lastOne", {withCredentials: true})
}

export const getDataGraph = async() =>{
    //return await axios.get("https://api.testsoftware.dev:4000/api/graph", {withCredentials: true})
    return await axios.get("http://localhost:4000/api/graph", {withCredentials: true})
}

export const getProbability = async() =>{
   // return await axios.get("https://api.testsoftware.dev:4000/api/event", {withCredentials: true})
    return await axios.get("http://localhost:4000/api/event", {withCredentials: true})
}