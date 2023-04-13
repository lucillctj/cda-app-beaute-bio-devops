import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: { 
        type: String, 
        required: true 
    },
    productDescription: { 
        type: String, 
        required: true 
    },
    productPrice: { 
        type: Number, 
        required: true 
    },
    categoryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' 
    }
});

const Product = mongoose.model("Product", productSchema);

export default Product;