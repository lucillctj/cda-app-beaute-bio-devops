import express from "express";
import { deleteProduct, updateProduct, getProducts, getProductById, postProduct, getProductsSoinsDuCorps, getProductsSoinsDuVisage, getProductsMaquillage, getProductsBeauteDesMains } from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/product", getProductById);
router.get("/products/soins-du-corps", getProductsSoinsDuCorps);
router.get("/products/soins-du-visage", getProductsSoinsDuVisage);
router.get("/products/maquillage", getProductsMaquillage);
router.get("/products/beaute-des-mains", getProductsBeauteDesMains);

router.get("/create-product", (req, res) => {
    res.render("products/createProduct", { 
        title: "Ajouter un produit"
    });
})
router.post("/add-product", postProduct);
router.put("/product", updateProduct);
router.delete("/product", deleteProduct);

export default router;