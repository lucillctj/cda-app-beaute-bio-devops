import Product from "../models/product.js";


export const homepage = async (req, res, next) => {
    const products = await Product.find();
    
    console.log(products);
    // res.status(200).json({products});
    res.status(200).render("homepage", { 
        title: "Homepage",
        products: products });
};