const Bookmark = require('../models/bookmark')
const Category = require('../models/category')
const LOGO_API = "https://api.kickfire.com/logo?website="


async function createBookmark(bookmarkInfo) {
    function extractRootDomain (url){
        var secondLevelDomain = url.split('.').reverse()[1].split('/').reverse()[0]
        return secondLevelDomain
    };
    let SLD = extractRootDomain(bookmarkInfo.link)
    let icon = `${LOGO_API}${SLD}.com`
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
    let categoryData = await Category.find({ categoryName: category }).select({"_id": 0}).populate("bookmarks").exec()
    if (categoryData.length > 0 && categoryData[0].bookmarks.length > 0) {
        let bookmarks = categoryData[0].bookmarks
        return bookmarks
    }else{
        return []
    }
    
}

module.exports = {
    createBookmark,
    addNewBookmark,
    deleteBookmark,
    getBookmarks,
}