import express from "express";
import { homepage } from "../controllers/homepageController.js";


const router = express.Router();


router.get("/", homepage);


export default router;