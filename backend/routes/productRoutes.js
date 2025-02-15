import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

const productRouter = Router();

// Obtener todos los productos
// GET /
productRouter.get("/", getAllProducts);

// Obtener un producto mediante su id
// GET /:id
productRouter.get("/:id", getProductById);

// Agregar un nuevo producto
// POST /
productRouter.post("/", addProduct);

// Actualizar un producto (parcialmente o completamente)
// PATCH /:id
productRouter.patch("/:id", updateProduct);

// Borrar un producto
// DELETE /:id
productRouter.delete("/:id", deleteProduct);

export { productRouter };
