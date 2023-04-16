const Bookmark = require('../models/bookmark')
const Category = require('../models/category')
const LOGO_API = "https://api.kickfire.com/logo?website="


async function createBookmark(bookmarkInfo) {
    let icon = `${LOGO_API}${bookmarkInfo.name}.com`
    bookmarkInfo.icon = icon
    let newBookmark = new Bookmark(bookmarkInfo)
    return newBookmark
}

async function addNewBookmark(category,newBookmark) {
    await Category.findOneAndUpdate({ categoryName: category },{ "$push": { "bookmarks": newBookmark } })
}

async function deleteBookmark(category,bookmarkId) {
    await Category.findOneAndUpdate({ categoryName: category },{ $pull: { "bookmarks": bookmarkId } })
    await Bookmark.findByIdAndDelete({ _id: bookmarkId })
}

async function getBookmarks(category) {
    let bookmarks = (await Category.find({ categoryName: category }).select({"_id": 0}).populate("bookmarks").exec())[0].bookmarks
    return bookmarks
}

module.exports = {
    createBookmark,
    addNewBookmark,
    deleteBookmark,
    getBookmarks
}