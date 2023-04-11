const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookmarkSchema  = new Schema({
    name : String,
    link : String,
    icon : String 
})

const Bookmark = mongoose.model("bookmark", bookmarkSchema) 

module.exports = Bookmark