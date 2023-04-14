const mongoose = require('mongoose')
const Schema = mongoose.Schema



const tapSchema  = new Schema({
    tabName : String,
    categories : [{type: Schema.Types.ObjectId, ref:"category"}]
})

const Tap = mongoose.model("tab", tapSchema) 
module.exports = Tap