const Category = require('../models/category')
const Tab = require('../models/tab')


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

module.exports = {
    doesExist,
    createCategory,
    getCategories
}