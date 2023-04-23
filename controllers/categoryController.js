import Category from "../models/category.js";

//get all categories
export const getCategories = async (req, res) => {
    const categories = await Category.find();

    res.status(200).json({categories});
};

//get category by id
export const getCategoryById = async (req, res) => {
    const categoryId = req.body.id
    const category = await Category.findById({_id: categoryId});

    res.status(200).json({category});
};

//create category
export const postCategory = async (req, res) => {
    const categoryName = req.body.categoryName;
    const category = await Category.create({
        categoryName,
    });

    res.status(201).json({category});
}

//update category
export const updateCategory = async (req, res) => {
    const categoryId = req.body.id;
    const categoryName = req.body.categoryName;
    await Category.findByIdAndUpdate({ _id: categoryId}, {categoryName}, {new: true});
   
    res.status(200).json({message: `category n° ${categoryId} is updated!`});
};


//delete category
export const deleteCategory = async (req, res) => {
    const categoryId = req.body.id;
    await Category.findByIdAndDelete({_id: categoryId});
    
    res.status(200).json({message: `category n° ${categoryId} is deleted!`});
};
