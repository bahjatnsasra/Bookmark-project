const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/bookmarks')
.then(()=> console.log('Connected to MongoDB'))
.catch((error)=> console.log('cant Connected to MongoDB',error));

const tapSchema  = new Schema({
    tabName : String,
    categories : [{type: Schema.Types.ObjectId, ref:"category"}]
})

const Tap = mongoose.model("tab", tapSchema) 
module.exports = Tap