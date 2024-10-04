import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchSalesData = async (year) => {
  try {
    const response = await axios.get(`${API_URL}/salesData${year}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching sales data:", error);
    throw error;
  }
};

export const fetchCategorySalesData = async (year) => {
  try {
    const response = await axios.get(`${API_URL}/categorySales${year}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category sales data:", error);
    throw error;
  }
};
