const express = require("express");
const router = express.Router();
const categoryUtils = require('../utils/category_utils')
const tabUtils = require('../utils/tab_utils')



router.post('/',async function (req,res) {
    let newCategory = await categoryUtils.createCategory(req.body)
    let doesExist = await categoryUtils.doesExist(newCategory)
    if (!doesExist) {
        newCategory.save()
        tabUtils.addToTab("Main",newCategory)
        tabUtils.addToTab(req.body.tab,newCategory)
        res.send(newCategory)
    }else{
        res.status(409).send(`${newCategory.categoryName} category is alraedy in use`)
    }
})


router.get('/', async function (req,res) {
    let categories = await categoryUtils.getCategories('Main')
    res.send(categories)
})

router.get('/:tabName', async function (req,res) {
    let tab = req.params.tabName
    let categoriesData = await categoryUtils.getCategories(tab)
    res.send(categoriesData.categories)
})


module.exports = router;
