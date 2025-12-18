const API_URL = import.meta.env.VITE_API_URL || "https://dummyjson.com/products";

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Gagal mengambil data");
  }
  return response.json();
};