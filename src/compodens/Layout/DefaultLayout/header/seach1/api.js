import axios from "axios";
import { removeVietnameseTones } from "./utils"; // Import utility function

const API_URL = "http://localhost:3000/products";

export const searchProducts = async (query) => {
  try {
    const response = await axios.get(API_URL); // Fetch all products
    const normalizedQuery = removeVietnameseTones(query.toLowerCase());

    return response.data
      .map((product) => {
        const normalized_name = product.name
          ? removeVietnameseTones(product.name.toLowerCase())
          : "";
        return {
          ...product,
          normalized_name,
        };
      })
      .filter((product) => product.normalized_name.includes(normalizedQuery))
      .sort((a, b) => {
        const aIndex = a.normalized_name.indexOf(normalizedQuery);
        const bIndex = b.normalized_name.indexOf(normalizedQuery);
        return aIndex - bIndex;
      });
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};
