import axios from "axios";
import { removeVietnameseTones } from "./utils"; // Import utility function

const API_URL = "http://localhost:3000/products";

export const searchProductsByCategory = async (query, priceRange) => {
  try {
    const response = await axios.get(API_URL);
    const normalizedQuery = removeVietnameseTones(query.toLowerCase());

    const filteredProducts = response.data
      .map((product) => ({
        ...product,
        normalized_category: product.category
          ? removeVietnameseTones(product.category.toLowerCase())
          : "",
      }))
      .filter(
        (product) =>
          product.normalized_category.includes(normalizedQuery) &&
          product.price >= priceRange[0] &&
          product.price <= priceRange[1]
      );

    const uniqueCategories = Array.from(
      new Set(filteredProducts.map((product) => product.category))
    ).map((category) => ({
      category,
    }));

    return uniqueCategories;
  } catch (error) {
    console.error("Error searching products by category:", error);
    throw error;
  }
};
