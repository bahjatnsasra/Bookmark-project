const express = require("express");
const router = express.Router();
const Tab = require('../models/tab')
const Category = require('../models/category')
const Bookmark = require('../models/bookmark')
const categoryUtils = require('../utils/category_utils')
const tabUtils = require('../utils/tab_utils')
const bookmarkUtils = require('../utils/bookmark_utils')



router.post('/tab',async function (req,res) {
    let tab = new Tab(req.body)
    await tabUtils.createMainTab()
    let doesExist = await tabUtils.doesExist(tab)
    if (!doesExist) {
        tab.save()
        res.send(tab)
    }else{
        res.status(409).send(`${tab.tabName} tab is alraedy in use`)
    }
})

router.get('/tabs', function (req,res) {
    Tab.find({},{_id:0})
    .then(allTabs => {
        res.send(allTabs)
    })
})

router.post('/category',async function (req,res) {
    let newCategory = new Category(req.body)
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

router.post('/bookmark',async function (req,res) {
    let category = req.body.category
    let newBookmark = await bookmarkUtils.createBookmark(req.body)
    newBookmark.save()
    await Category.findOneAndUpdate({ categoryName: category },{ "$push": { "bookmarks": newBookmark } })
    res.send(newBookmark)
})

router.get('/bookmarks/:categoryName', async function (req,res) {
    let category = req.params.categoryName
    let bookmarks = (await Category.find({ categoryName: category }).select({"_id": 0}).populate("bookmarks").exec())[0].bookmarks
    res.send(bookmarks)
})

router.get('/categories', async function (req,res) {
    let categories = (await Tab.find({ tabName: 'Main' }).select({ "_id": 0}).populate("categories").exec())[0]
    res.send(categories)
})

router.get('/categories/:tabName', async function (req,res) {
    let tab = req.params.tabName
    let categories = (await Tab.find({ tabName: tab }).select({"_id": 0}).populate("categories").exec())[0]
    res.send(categories)
})




module.exports = router;
