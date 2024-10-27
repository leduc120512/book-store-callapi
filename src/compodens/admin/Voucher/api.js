import axios from "axios";

const API_URLS = {
  freeship: "http://localhost:3000/freeshipVouchers",
  book: "http://localhost:3000/bookVouchers",
  bank: "http://localhost:3000/bankVouchers",
};

const getApiUrl = (type) => API_URLS[type] || API_URLS.freeship;

export const fetchData = async (type) => {
  try {
    const url = getApiUrl(type);
    console.log('Fetching data from URL:', url); // Debugging log
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteData = async (type, id) => {
  try {
    const url = `${getApiUrl(type)}/${id}`;
    console.log('Deleting data at URL:', url); // Debugging log
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export const updateData = async (type, id, data) => {
  try {
    const url = `${getApiUrl(type)}/${id}`;
    console.log('Updating data at URL:', url); // Debugging log
    const response = await axios.patch(url, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const createData = async (type, data) => {
  try {
    const url = getApiUrl(type);
    console.log('Creating data at URL:', url); // Debugging log
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};
