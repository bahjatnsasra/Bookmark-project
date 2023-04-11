const Bookmark = require('../models/bookmark')
const LOGO_API = "https://api.kickfire.com/logo?website="


async function createBookmark(bookmarkInfo) {
    let icon = `${LOGO_API}${bookmarkInfo.name}.com`
    bookmarkInfo.icon = icon
    let newBookmark = new Bookmark(bookmarkInfo)
    return newBookmark
}

module.exports = {
    createBookmark
}