import axios from "axios";
const URL = "https://better-hem-dove.cyclic.app";
export const getUsers = async (params = {}) => {
  let res = await axios.get(
    `${URL}/?page=${params.page}&limit=${params.limit}`
  );
  return res.data;
};
export const getUsersByIncomeAndCar = async (params = {}) => {
  let res = await axios.get(
    `${URL}/usersByIncomeAndCar/?page=${params.page}&limit=${params.limit}`
  );
  return res.data;
};

export const getUsersByPhonePrice = async (params = {}) => {
  let res = await axios.get(
    `${URL}/usersByPhonePrice/?page=${params.page}&limit=${params.limit}`
  );
  return res.data;
};
export const getUsersByLastNameM = async (params = {}) => {
  let res = await axios.get(
    `${URL}/usersByLastNameM/?page=${params.page}&limit=${params.limit}`
  );
  return res.data;
};
export const getUsersByCar = async (params = {}) => {
  let res = await axios.get(
    `${URL}/usersByCar/?page=${params.page}&limit=${params.limit}`
  );
  return res.data;
};

export const getTopCities = async () => {
  let res = await axios.get(`${URL}/topCities`);
  return res.data;
};
