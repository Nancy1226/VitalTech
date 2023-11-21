import axios from "axios";

export const insertVital = async(valores) =>{
    //return await axios.post('https://api.testsoftware.dev:4000/api/create', valores)
    return await axios.post('http://localhost:4000/api/create', valores)
}

export const getAllVital = async(id) =>{ 
    //return await axios.get(`https://api.testsoftware.dev:4000/api/getAll/${id}`, {withCredentials: true})
    return await axios.get(`http://localhost:4000/api/getAll/${id}`, {withCredentials: true})
}

export const createUser = async(valores)=>{
    return await axios.post('http://localhost:4000/api/signup', valores)
}

export const loginUser = async(valores)=>{
    // return await axios.post('https://api.testsoftware.dev:4000/api/signin', valores, {withCredentials: true})
    return await axios.post('http://localhost:4000/api/signin', valores, {withCredentials: true})
}

export const logoutUser = async() =>{ 
    //return await axios.get('https://api.testsoftware.dev:4000/api/logout', {withCredentials: true})
    return await axios.get('http://localhost:4000/api/logout', {withCredentials: true})
}

export const apiEmail = async(emailAddress)=>{
    const apiKey = "at_zflcKeL04C6TIHqOakfltmZ62ApzQ";
    return await axios.get(`https://emailverification.whoisxmlapi.com/api/v3?apiKey=${apiKey}&emailAddress=${emailAddress}`)
}
export const getOneMesaure = async(id) =>{
    //return await axios.get(`https://api.testsoftware.dev:4000/api/lastOne/${id}`, {withCredentials: true})
    return await axios.get(`http://localhost:4000/api/lastOne/${id}`, {withCredentials: true})
}

export const getDataGraph = async(id) =>{
    //return await axios.get(`https://api.testsoftware.dev:4000/api/graph/${id}`, {withCredentials: true})
    return await axios.get(`http://localhost:4000/api/graph/${id}`, {withCredentials: true})
}

export const getProbability = async(id) =>{
   // return await axios.get(`https://api.testsoftware.dev:4000/api/event/${id}`, {withCredentials: true})
    return await axios.get(`http://localhost:4000/api/event/${id}`, {withCredentials: true})
}
