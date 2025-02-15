// inicializar el servidor

import express from "express";
import { productRouter } from "./routes/productRoutes.js";  
import { connectDB } from "./config/connectDB.js";
import cors from "cors";

process.loadEnvFile();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

// http://localhost:3001/api/products/
app.use("/api/products", productRouter);  

app.listen(PORT, () => {
  console.log("El servidor está en escucha en el puerto http://localhost:" + PORT);
  connectDB();
});
