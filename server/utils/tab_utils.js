const Tab = require('../models/tab')
const categoryUtils = require('../utils/category_utils')



async function addToTab(tabName,category) {
    await Tab.findOneAndUpdate({ tabName: tabName },{ "$push": { "categories": category } })
}


async function doesExist(tab) {
    let tabObj = await Tab.find({tabName : tab['tabName']})
    if (tabObj.length > 0) {
        return true
    }
    return false
}

async function createTab(tabData) {
    let newTab = new Tab(tabData)
    return newTab
}

async function deleteTab(tabName) {
let tab =(await Tab.find({tabName : tabName}).select({ "_id": 0}).populate("categories").exec())[0]
    await categoryUtils.deleteCategories(tab.categories)
    await Tab.findOneAndUpdate({tabName : tabName},{$set : {'categories': []}})
    await Tab.findOneAndDelete({tabName : tabName})
}

async function getAllTabs() {
    let allTabs = Tab.find({},{_id:0})
    return allTabs
}

async function createMainTab() {
    let main = new Tab({tabName : 'Main'})
    let doesMainExist = await doesExist(main)
    if (!doesMainExist) {
        main.save()
    }
}

module.exports = {
    addToTab,
    doesExist,
    createMainTab,
    createTab,
    getAllTabs,
    deleteTab
}