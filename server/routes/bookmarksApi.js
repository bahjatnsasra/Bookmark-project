const express = require("express");
const router = express.Router();
const bookmarkUtils = require('../utils/bookmark_utils')



router.post('/',async function (req,res) {
    let category = req.body.category
    let newBookmark = await bookmarkUtils.createBookmark(req.body)
    newBookmark.save()
    bookmarkUtils.addNewBookmark(category,newBookmark)
    res.send(newBookmark)
})


router.delete('/',async function (req,res) {
    let category = req.body.category
    let bookmarkId = req.body.Id
    bookmarkUtils.deleteBookmark(category,bookmarkId)
})

router.get('/:categoryName', async function (req,res) {
    let category = req.params.categoryName
    let bookmarks = await bookmarkUtils.getBookmarks(category)
    res.send(bookmarks)
})


module.exports = router;
