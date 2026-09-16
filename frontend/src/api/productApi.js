const API_URL = "http://localhost:5000/api/products";

// Get all products
export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Product API Error:", error);
    throw error;
  }
};