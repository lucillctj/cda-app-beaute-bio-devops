import Category from "../models/category.js";

//get all categories
export const getCategories = (req, res, next) => {
    res.render("category/getCategories", {
        title: "CategoryList",
    });
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