import Product from "../models/product.js";

//get all products
export const getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).render("products/getAllProducts", { 
        title: "Products",
        products: products });
    };
    
    //get product by id
    export const getProductById = async (req, res, next) => {
        const productId = req.params.id;
        const product = await Product.findById({_id: productId});
        res.status(200).render("products/getDetailProduct", {
            title: "Product",
            product: product 
        });
    };
    
    export const getProductsSoinsDuCorps = async (req, res, next) => {
        const products = await Product.find({categoryId: '6437b43e926978d81fcf6819'});
        res.status(200).render("products/getProductsSoinsDuCorps", { 
            title: "Soins du corps",
            products: products });
        };
        
        export const getProductsSoinsDuVisage = async (req, res, next) => {
            const products = await Product.find({categoryId: '6437b456926978d81fcf681b'});
            res.status(200).render("products/getProductsSoinsDuVisage", { 
                title: "Soins du visage",
                products: products });
            };
            
            export const getProductsMaquillage = async (req, res, next) => {
                const products = await Product.find({categoryId: '6436c5f0a6e9ad5ceea19171'});
                res.status(200).render("products/getProductsMaquillage", { 
                    title: "Maquillage",
                    products: products });
                };
                
                export const getProductsBeauteDesMains = async (req, res, next) => {
                    const products = await Product.find({categoryId: '6437ba8dc561d8ee4795b256'});
                    res.status(200).render("products/getProductsBeauteDesMains", { 
                        title: "Beauté des mains",
                        products: products });
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
                        res.status(201).json({message: `new product created: ${product}`});
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
                        const productId = req.params.id;
                        await Product.findByIdAndDelete({_id: productId});
                        res.status(200).json({message: `product n° ${productId} is deleted!`});
                    };
