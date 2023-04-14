import Category from "../models/category.js";

//get all categories
export const getCategories = async (req, res, next) => {
    const categories = await Category.find();
    console.log(categories);
    res.status(200).json({categories});
};

//get category by id
export const getCategoryById = async (req, res, next) => {
    const categoryId = req.body.id
    const category = await Category.findById({_id: categoryId});

    console.log(category);
    res.status(200).json({category});
};

//create category
export const postCategory = async (req, res, next) => {
    const categoryName = req.body.categoryName;
    const category = await Category.create({
        categoryName,
    });
    console.log(category);

    //res.status(201).redirect("/categories")
    res.status(201).json({category});
}

//update category
export const updateCategory = async (req, res, next) => {
    const categoryId = req.body.id;
    const categoryName = req.body.categoryName;
    await Category.findByIdAndUpdate({ _id: categoryId}, {categoryName}, {new: true});
    res.status(200).json({message: `category n° ${categoryId} is updated!`});
};


//delete category
export const deleteCategory = async (req, res, next) => {
    const categoryId = req.body.id;
    await Category.findByIdAndDelete({_id: categoryId});
    res.status(200).json({message: `category n° ${categoryId} is deleted!`});
};
