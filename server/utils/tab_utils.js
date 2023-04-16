const Tab = require('../models/tab')


async function addToTab(tabName,category) {
    console.log(tabName);
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

async function deleteTab(tab) {
    await Tab.findOneAndDelete({tabName : tab})
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