const express = require('express')
const tapApi = require('./routes/tabsApi')
const categoriesApi = require('./routes/categoriesApi')
const bookmarksApi = require('./routes/bookmarksApi')
const dataBaseManager = require('./utils/database_manager')

const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.json())
app.use(express.urlencoded({extended : false}))
dataBaseManager.connect()

app.use('/tabs',tapApi)
app.use('/categories',categoriesApi)
app.use('/bookmarks',bookmarksApi)


const port = 5000  
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})