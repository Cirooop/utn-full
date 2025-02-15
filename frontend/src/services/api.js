// api.js estará encargado de ejecutar las funciones del backend
import axios from "axios";

const BASE_URL_API = "http://localhost:3001/api/products";

// Obtener todos los productos
const getAllProducts = async () => {
  try {
    const response = await axios.get(BASE_URL_API);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};

// Agregar un producto
const addProduct = async (product) => {
  try {
    const response = await axios.post(BASE_URL_API, product);
    return response.data;
  } catch (error) {
    console.error("Error al agregar producto:", error);
  }
};

// Modificar un producto
const updateProduct = async (id, product) => {
  try {
    const response = await axios.patch(`${BASE_URL_API}/${id}`, product);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar producto:", error);
  }
};

// Eliminar un producto
const deleteProduct = async (id) => {
  try {
    await axios.delete(`${BASE_URL_API}/${id}`);
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }
};

export { getAllProducts, addProduct, updateProduct, deleteProduct };
