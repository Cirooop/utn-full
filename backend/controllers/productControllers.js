import { Product } from "../models/productModel.js";



// Obetener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
};

// Obetener un solo producto con el ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener el producto",
      error: error.message,
    });
  }
};


// Agregar un producto
const addProduct = async (req, res) => {
  try {
    const { body } = req;

    console.log("Cuerpo de la solicitud:", body);  // Agrega este log

    // Validar datos antes de guardar
    if (!body.nombre || !body.precio || !body.stock || !body.categoria || !body.descripcion || !body.img) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const newProduct = new Product(body);
    await newProduct.save();

    return res.status(201).json({ message: "Producto agregado exitosamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al agregar el producto",
      error: error.message,
    });
  }
};

// Editar un producto 
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updatedProduct = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({
      message: "Producto actualizado exitosamente",
      updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al actualizar el producto",
      error: error.message,
    });
  }
};


// Eliminar un producto 
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al eliminar el producto",
      error: error.message,
    });
  }
};

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
