import Product from "../models/product.js";


export const homepage = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).render("homepage", { 
        title: "Homepage",
        products: products });
};