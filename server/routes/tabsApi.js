const express = require("express");
const router = express.Router();
const tabUtils = require('../utils/tab_utils')


router.post('/',async function (req,res) {
    let tab = await tabUtils.createTab(req.body)
    await tabUtils.createMainTab()
    let doesExist = await tabUtils.doesExist(tab)
    if (!doesExist) {
        tab.save()
        res.send(tab)
    }else{
        res.status(409).send(`${tab.tabName} tab is alraedy in use`)
    }
})

router.get('/', async function (req,res) {
    let allTabs = await tabUtils.getAllTabs()
    res.send(allTabs)
})

router.delete('/',async function (req,res) {
    const tab = req.body.tab
    await tabUtils.deleteTab(tab)
    res.end()
})


module.exports = router;
