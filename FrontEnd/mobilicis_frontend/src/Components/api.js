import axios from "axios"

export const getUsers = async (params = {}) =>{
    let res = await axios.get(`http://localhost:8080/?page=${params.page}&limit=${params.limit}`);
    return res.data;
}
export const getUsersByIncomeAndCar = async (params = {}) =>{
    let res = await axios.get(`http://localhost:8080/usersByIncomeAndCar/?page=${params.page}&limit=${params.limit}`);
    return res.data;
}

export const getUsersByPhonePrice = async (params = {}) =>{
    let res = await axios.get(`http://localhost:8080/usersByPhonePrice/?page=${params.page}&limit=${params.limit}`);
    return res.data;
}
export const getUsersByLastNameM = async (params = {}) =>{
    let res = await axios.get(`http://localhost:8080/usersByLastNameM/?page=${params.page}&limit=${params.limit}`);
    return res.data;
}
export const getUsersByCar = async (params = {}) =>{
    let res = await axios.get(`http://localhost:8080/usersByCar/?page=${params.page}&limit=${params.limit}`);
    return res.data;
}

export const getTopCities = async (params = {}) =>{
    let res = await axios.get(`http://localhost:8080/topCities/?page=${params.page}&limit=${params.limit}`);
    return res.data;
}