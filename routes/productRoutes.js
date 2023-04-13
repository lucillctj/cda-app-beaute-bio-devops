import express from "express";
import { deleteProduct, updateProduct, getProducts, getProductById, postProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/product", getProductById);
router.post("/add-product", postProduct);
router.put("/product", updateProduct);
router.delete("/product", deleteProduct);

export default router;