import Product from "../models/product.js";

//get all products
export const getProducts = async (req, res, next) => {
    const products = await Product.find();
    
    console.log(products);
    res.status(200).json({products});
};

//get product by id
export const getProductById = async (req, res, next) => {
    const productId = req.body.id;
    const product = await Product.findById({_id: productId});
    
    console.log(product);
    res.status(200).json({product});
};

export const getProductsSoinsDuCorps = async (req, res, next) => {
    const products = await Product.find({categoryId: '6437b43e926978d81fcf6819'});
    console.log(products);
    res.status(200).json({products});
};

export const getProductsSoinsDuVisage = async (req, res, next) => {
    const products = await Product.find({categoryId: '6437b456926978d81fcf681b'});
    console.log(products);
    res.status(200).json({products});
};

export const getProductsMaquillage = async (req, res, next) => {
    const products = await Product.find({categoryId: '6436c5f0a6e9ad5ceea19171'});
    console.log(products);
    res.status(200).json({products});
};

export const getProductsBeauteDesMains = async (req, res, next) => {
    const products = await Product.find({categoryId: '6437ba8dc561d8ee4795b256'});
    console.log(products);
    res.status(200).json({products});
};

//create product
export const postProduct = async (req, res, next) => {
    const newProduct = {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        categoryId: req.body.categoryId
    };
    const product = await Product.create(newProduct);
    console.log(product);
    res.status(201).json({product});
};

//update product
export const updateProduct = async (req, res, next) => {
    const productId = req.body.id;
    const updateProduct = {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        categoryId: req.body.categoryId
    };
    await Product.findByIdAndUpdate({ _id: productId}, updateProduct, {new: true});
    res.status(200).json({message: `product n° ${productId} is updated!`});
};

//delete product
export const deleteProduct = async (req, res, next) => {
    const productId = req.body.id
    await Product.findByIdAndDelete({_id: productId});
    res.status(200).json({message: `product n° ${productId} is deleted!`});
};