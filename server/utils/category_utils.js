const Category = require('../models/category')


async function doesExist(category) {
    let categoryObj = await Category.find({categoryName : category['categoryName']})
    if (categoryObj.length > 0) {
        return true
    }
    return false
}

module.exports = {
    doesExist
}