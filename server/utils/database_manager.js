
const mongoose = require('mongoose')


function connect(params) {
    mongoose.connect('mongodb://localhost/bookmarks')
.then(()=> console.log('Connected to MongoDB'))
.catch((error)=> console.log('cant Connected to MongoDB',error));
}

module.exports = {
    connect
}