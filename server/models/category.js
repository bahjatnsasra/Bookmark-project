const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema  = new Schema({
    categoryName : String,
    bookmarks : [{type: Schema.Types.ObjectId, ref:"bookmark"}]
})

const Category = mongoose.model("category", categorySchema) 

module.exports = Category