const Category = require('../models/category')
const Tab = require('../models/tab')
const bookmarkUtils = require('../utils/bookmark_utils')



async function doesExist(category) {
    let categoryObj = await Category.find({categoryName : category['categoryName']})
    if (categoryObj.length > 0) {
        return true
    }
    return false
}

async function createCategory(categoryData) {
    let newCategory = new Category(categoryData)
    return newCategory
}

async function getCategories(tab) {
    let categories = (await Tab.find({ tabName: tab }).select({ "_id": 0}).populate("categories").exec())[0]
    return categories
}


async function deleteCategories(categories) {
    for (const category of categories) {
        let categoryData = await Category.findById({ _id: category._id })
        for (const bookmark of categoryData.bookmarks) {
            bookmarkUtils.deleteBookmark(categoryData.categoryName,bookmark._id)
        }
        await Category.findOneAndDelete({categoryName : category.categoryName})
    }
}   

module.exports = {
    doesExist,
    createCategory,
    getCategories,
    deleteCategories
}