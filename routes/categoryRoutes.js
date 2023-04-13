import express from "express";
import { deleteCategory, updateCategory, getCategories, getCategoryById, postCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categories", getCategories);
router.get("/category", getCategoryById);
router.post("/add-category", postCategory);
router.put("/category", updateCategory);
router.delete("/category", deleteCategory);

export default router;